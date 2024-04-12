// models/FormData.js
const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    formData: { type: Object, required: true }
});

module.exports = mongoose.model('FormData', formDataSchema);
