import Request from '@/models/Request';
import connectDB from '@/middlewares/connectDB';

const getPost = async (req, res) => {
  try {
    const re = await Request.find({publisher: req.body.publisher}).populate("user").populate("publisher")
        return res.status(201).json({ type: "success", re: re});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error getting comment' });
      }
};

export default connectDB(getPost);