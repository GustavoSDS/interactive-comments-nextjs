import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { IReply } from './Reply';

// Interfaz para Comment
export interface IComment extends Document {
    content: string;
    createdAt: string;
    score: number;
    user: IUser;
    replies: IReply[];
}

// Esquema para Comment
const CommentSchema: Schema = new Schema({
    content: { type: String, required: true },
    createdAt: { type: String, required: true },
    score: { type: Number, required: true, default: 0 },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    replies: [{ type: Schema.Types.ObjectId, ref: 'Reply' }]
});

export default mongoose.model<IComment>('Comment', CommentSchema);
