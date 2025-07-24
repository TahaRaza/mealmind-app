// E:\MealMind-Backend\models\Member.js
// Member Model for storing member information

const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  allergies: {
    type: [String],
    required: true,
  },
  favourite: {
    type: String,
    required: true,
  },
  dislikes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Member", memberSchema);
