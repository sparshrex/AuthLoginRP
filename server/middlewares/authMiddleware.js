const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if user exists in database
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'User not found, authorization denied' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(401).json({ message: 'Invalid token, authorization denied' });
  }
};

module.exports = authMiddleware;
