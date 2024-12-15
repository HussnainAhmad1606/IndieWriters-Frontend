import SocialMedia from '@/models/SocialMedia';
import connectDB from '@/middlewares/connectDB';

const getPost = async (req, res) => {
  try {
    const user = await SocialMedia.findOneAndUpdate({user: req.body.userId}, { $set: { facebook: req.body.facebook, twitter: req.body.twitter, medium: req.body.medium, substack: req.body.substack}, }, { new: true,upsert: true})
        return res.status(201).json({ type: "success",message: "Socials updated successfully"});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error getting details' });
      }
};

export default connectDB(getPost);