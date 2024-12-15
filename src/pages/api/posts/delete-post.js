import Post from '@/models/Post';
import connectDB from '@/middlewares/connectDB';

const getPost = async (req, res) => {
  try {
    
    const post = await Post.findOneAndDelete({_id: req.body.postId})
        return res.status(201).json({ type: "success", message: 'Post Deleted successfully'});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error deleting post' });
      }
};

export default connectDB(getPost);