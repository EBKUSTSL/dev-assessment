import mongoose, { Schema, Document, Model } from 'mongoose';

// Define the User interface that extends mongoose's Document
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

// Create the User schema with Mongoose
const UserSchema: Schema<IUser> = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Check if the model already exists to avoid recompiling in development
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
