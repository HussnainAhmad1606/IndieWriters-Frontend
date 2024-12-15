import Post from '@/models/Post';
import connectDB from '@/middlewares/connectDB';
import mongoose from 'mongoose';
const addCardHandler = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.body.author);
    console.log(userId)
        const post = new Post({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        tags: req.body.tags,
        likes: [],
        author: userId
        });
        await post.save();
        const postId = post._id;
        return res.status(201).json({ type: "success", message: "Post added Successfully", postId: postId});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error adding post' });
      }
};

export default connectDB(addCardHandler);