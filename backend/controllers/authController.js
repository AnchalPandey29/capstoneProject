const User = require('../models/consumerSchema');

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, password, role } = req.body;
    const user = new User({ name, email, mobile, password, role });
    await user.save();

    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send({ error: 'Invalid login credentials' });
  }
};

// Logout User
const logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { registerUser, loginUser, logoutUser };
