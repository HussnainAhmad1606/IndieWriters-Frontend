import Post from '@/models/Post';
import connectDB from '@/middlewares/connectDB';

const addCardHandler = async (req, res) => {
    const { page = 1, limit = 10 } = req.query; // Get query parameters
  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  try {
    const posts = await Post.find({}).populate("author")
      .skip((pageNumber - 1) * limitNumber) // Skip records for pagination
      .limit(limitNumber); // Limit number of records

    const totalPosts = await Post.countDocuments(); // Get total post count

    res.status(200).json({ 
      posts, 
      total: totalPosts, 
      hasMore: (pageNumber * limitNumber) < totalPosts 
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
};

export default connectDB(addCardHandler);