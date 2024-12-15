import Comment from '@/models/Comment';
import connectDB from '@/middlewares/connectDB';
import mongoose from 'mongoose';
const addCardHandler = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.body.user);
    const postId = new mongoose.Types.ObjectId(req.body.postId);
  
        const comment = new Comment({
        postId: postId,
        user: userId,
        content: req.body.content
        });
        await comment.save();
        return res.status(201).json({ type: "success", message: "Comment added Successfully", postId: postId});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error adding comment' });
      }
};

export default connectDB(addCardHandler);