const express = require('express');
const connectDB = require('./db');
const User = require('./User');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Route to update user profile
app.post('/api/update-profile', async (req, res) => {
  const { email, username } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { username },
      { new: true, upsert: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Route to get user profile
app.get('/api/user-profile/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
