import Post from '@/models/Post';
import connectDB from '@/middlewares/connectDB';

const getPost = async (req, res) => {
  try {
    
    const post = await Post.findOneAndUpdate({_id: req.body.postId}, { $set: { title: req.body.title, description: req.body.description, tags: req.body.tags}})
        return res.status(201).json({ type: "success", message: 'Post updated successfully'});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error updating post' });
      }
};

export default connectDB(getPost);