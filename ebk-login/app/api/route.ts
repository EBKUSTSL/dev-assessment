import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import connectToDatabase from '../../lib/mongoose';
import User, { IUser } from '../../models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {

        await connectToDatabase();
        const user: IUser | null = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch: boolean = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        return res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ message: 'Server error' });
    }
}
