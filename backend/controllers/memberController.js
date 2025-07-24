// E:\MealMind-Backend\controllers\memberController.js
// Member Controller for managing members

const Member = require("../models/Member");

// Get all members
const getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: "Error fetching members", error });
  }
};

// Add a new member
const addMember = async (req, res) => {
  const { name, avatar, allergies, favourite, dislikes } = req.body;

  try {
    const newMember = new Member({
      name,
      avatar,
      allergies,
      favourite,
      dislikes,
    });

    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ message: "Error adding member", error });
  }
};

// Delete a member
const deleteMember = async (req, res) => {
  const { id } = req.params;

  try {
    await Member.findByIdAndDelete(id);
    res.status(200).json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting member", error });
  }
};

module.exports = { getAllMembers, addMember, deleteMember };
