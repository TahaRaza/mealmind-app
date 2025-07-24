// routes/memberRoutes.js
// Member Routes for managing member information

const express = require("express");
const router = express.Router();
const {
  getAllMembers,
  addMember,
  deleteMember,
} = require("../controllers/memberController");

// Route to get all members - Fixed: removed /members since base path is already /api/members
router.get("/", getAllMembers);

// Route to add a new member - Fixed: removed /members
router.post("/", addMember);

// Route to delete a member - Fixed: removed /members, now just /:id
router.delete("/:id", deleteMember);

module.exports = router;
