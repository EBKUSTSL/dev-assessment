import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        // Example validation logic
        if (email === 'ebkuser@gmail.com' && password === 'password123') {
            return NextResponse.json({ message: 'Login successful' });
        } else {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
    }
}

export function GET() {
    return NextResponse.json({ message: 'Method GET Not Allowed' }, { status: 405 });
}
