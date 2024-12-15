import Comment from '@/models/Comment';
import connectDB from '@/middlewares/connectDB';

const getPost = async (req, res) => {
  try {
    const comments = await Comment.find({postId: req.body.postId}).populate("user").populate("postId")
        return res.status(201).json({ type: "success", comments: comments});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error getting comment' });
      }
};

export default connectDB(getPost);