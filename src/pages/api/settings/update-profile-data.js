import User from '@/models/User';
import connectDB from '@/middlewares/connectDB';

const getPost = async (req, res) => {
  try {
    
    const user = await User.findOneAndUpdate({_id: req.body.userId}, { $set: { username: req.body.username, name: req.body.name, bio: req.body.bio}})
        return res.status(201).json({ type: "success", user: user});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error getting profile' });
      }
};

export default connectDB(getPost);