const Roadmap = require('../models/Roadmap');

// @desc    Create a roadmap
// @route   POST /api/roadmaps
const createRoadmap = async (req, res) => {
  try {
    const { title, description, category, milestones } = req.body;

    const roadmap = new Roadmap({
      user: req.user.id,
      title,
      description,
      category,
      milestones
    });

    const createdRoadmap = await roadmap.save();
    res.status(201).json(createdRoadmap);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all roadmaps for user
// @route   GET /api/roadmaps
const getRoadmaps = async (req, res) => {
  try {
    const roadmaps = await Roadmap.find({ user: req.user.id });
    res.json(roadmaps);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createRoadmap,
  getRoadmaps
};