const FormData = require('../models/FormData');

exports.saveFormData = async (req, res) => {
  const { userId, formData } = req.body;

  try {
    // Check if formData is empty
    if (!formData) {
      return res.status(400).json({ message: 'Form data is required' });
    }

    // Check if userId is provided
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    // Check if userId is valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    // Save form data
    const newFormData = new FormData({ userId, formData });
    await newFormData.save();

    res.status(201).json({ message: 'Form data saved successfully', formData: newFormData });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
