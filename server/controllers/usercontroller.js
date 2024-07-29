// userController.js

const bcrypt = require('bcrypt');
const {generateToken}=require('../jwt')
// const cloudinary = require('../cloudinary/cloudinary'); // Adjust the path as per your directory structure
const { User ,Blog,Comment} = require('../database/sequelize');

// Function to add a new user with Cloudinary image upload
exports.addUser = async (req, res) => {
  const { fullname, password, image_url } = req.body;

  try {
    // Validate if fullname and password are provided
    if (!fullname || !password || !image_url) {
      return res.status(400).json({ message: 'Fullname and password are required' });
    }

   
    // Create a new user record in the database with hashed password and optional image URL
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ 
      fullname ,
      password: hashedPassword, 
      image_url 
    });

    // Respond with the newly created user object (excluding password)
    const userResponse = {
      iduser: newUser.iduser,
      fullname: newUser.fullname,
      image_url: newUser.image_url,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };

    res.status(201).json(userResponse);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

exports.login = async (req, res) => {
  const { fullname, password } = req.body;
  console.log(fullname);
  try {
    const user = await User.findOne({where: { fullname: fullname } });
    console.log(user);
  
    if (!user ) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
console.log(password);
   const passwordMatch=await bcrypt.compare(password, user.password)
   console.log(user.password)
  if (!passwordMatch) {

    return res.status(401).json({ error: 'Authentication failed' });
    }
    // const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
    //   expiresIn: '1h',
    //   });
    const token = generateToken(user);
    res.json({ token, iduser: user.iduser , image_url:user.image_url});
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error });
  }
};


exports.updateUser = async (req, res) => {
  const  iduser  = req.params.iduser; // Assuming iduser is provided in the URL params
  const { fullname, image_url } = req.body;

  try {
    // Validate if at least one field is provided
    if (!fullname && !image_url) {
      return res.status(400).json({ message: 'At least one field (fullname or image_url) is required to update' });
    }

    // Find the user by ID
    const user = await User.findByPk(iduser);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user record
    const updatedUser = await user.update({
      fullname: fullname || user.fullname, // Keep existing fullname if not provided
      image_url: image_url || user.image_url, // Keep existing image_url if not provided
    });

    // Respond with the updated user object
    const userResponse = {
      iduser: updatedUser.iduser,
      fullname: updatedUser.fullname,
      image_url: updatedUser.image_url,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    };

    res.status(200).json(userResponse);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};
exports.deleteUser = async (req, res) => {
  const  iduser  = req.params.iduser; // Assuming iduser is provided in the URL params

  try {
    // Find the user by ID
    const user = await User.findByPk(iduser);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete all blogs associated with the user
    await Comment.destroy({ where: { UserId: iduser } });

    await Blog.destroy({ where: { UserId: iduser } });

    // Delete the user record
    await user.destroy();

    // Respond with a success message
    res.status(200).json({ message: 'User and associated blogs deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
};