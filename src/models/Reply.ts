import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

// Interfaz para Reply
export interface IReply extends Document {
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: IUser;
}

// Esquema para Reply
const ReplySchema: Schema = new Schema({
    content: { type: String, required: true },
    createdAt: { type: String, required: true },
    score: { type: Number, required: true, default: 0 },
    replyingTo: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export default mongoose.model<IReply>('Reply', ReplySchema);
