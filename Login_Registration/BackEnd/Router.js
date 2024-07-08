const router = require("express").Router();
const bcrypt = require('bcryptjs');
const { User } = require("./DatabaseTable");

// POST /register - Register a new user
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    console.log(username, email, password ,"username, email, password ");
  
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create user in database
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword
      });
  
      res.status(201).json({ message: 'User registered successfully',user:newUser });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Error registering user' });
    }
  });

  // POST /login - Authenticate user
  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Find user by username
      const user = await User.findOne({
        where: { username }
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Compare hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      res.status(200).json({ message: 'User authenticated successfully', user });
    } catch (error) {
      console.error('Error authenticating user:', error);
      res.status(500).json({ message: 'Error authenticating user' });
    }
  });
  
  module.exports = router;