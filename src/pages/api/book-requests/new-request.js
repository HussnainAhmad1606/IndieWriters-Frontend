import Request from '@/models/Request';
import connectDB from '@/middlewares/connectDB';

const getPost = async (req, res) => {
  try {
    const re = new Request({publisher: req.body.publisher, user: req.body.user, message: req.body.message})
    await re.save()
        return res.status(201).json({ type: "success", message: 'Request sent successfully'});
      } catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error adding rekuest' });
      }
};

export default connectDB(getPost);