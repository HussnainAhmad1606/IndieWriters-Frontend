import Post from '@/models/Post';
import connectDB from '@/middlewares/connectDB';

const getPost = async (req, res) => {
  try {
    const regex = new RegExp(req.body.term, 'i');
    const posts = await Post.find({
        $or: [
            { title: regex },
            { description: regex },
        ]
    });
        return res.status(201).json({ type: "success", posts: posts}).populate("author");
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error getting post' });
      }
};

export default connectDB(getPost);