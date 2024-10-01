import mongoose, { Schema, Document } from 'mongoose';

// Interfaz para User
export interface IUser extends Document {
    image: {
        png: string;
        webp: string;
    };
    username: string;
}

// Esquema para User
const UserSchema: Schema = new Schema({
    image: {
        png: { type: String, required: true },
        webp: { type: String, required: true }
    },
    username: { type: String, required: true }
});

export default mongoose.models.User ?? mongoose.model<IUser>('User', UserSchema);
