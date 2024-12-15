import Post from '@/models/Post';
import connectDB from '@/middlewares/connectDB';

const getPost = async (req, res) => {
  try {
    const post = await Post.findOne({_id: req.body.postId}).populate("author")
        return res.status(201).json({ type: "success", post: post});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error getting post' });
      }
};

export default connectDB(getPost);