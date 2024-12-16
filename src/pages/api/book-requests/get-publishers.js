import User from '@/models/User';
import connectDB from '@/middlewares/connectDB';

const getPost = async (req, res) => {
  try {
    const publishers = await User.find({role: "publisher"})
        return res.status(201).json({ type: "success", publishers: publishers});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error getting publishers' });
      }
};

export default connectDB(getPost);