import Post from '@/models/Post';
import connectDB from '@/middlewares/connectDB';

const getPost = async (req, res) => {
  try {
    const posts = await Post.find({})
        return res.status(201).json({ type: "success", posts: posts});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error getting analytics' });
      }
};

export default connectDB(getPost);