import SocialMedia from '@/models/SocialMedia';
import connectDB from '@/middlewares/connectDB';
import mongoose from 'mongoose';
const getPost = async (req, res) => {
  try {
    const userId = req.body.userId
    console.log(userId)
    const user = await SocialMedia.findOne({user: userId})
        return res.status(201).json({ type: "success", user: user});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error getting details' });
      }
};

export default connectDB(getPost);