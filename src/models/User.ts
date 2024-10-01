import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    image: {
        png: String,
        webp: String
    },
    username: String
});

export default mongoose.models.User || mongoose.model('User', userSchema);