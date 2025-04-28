const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  createRoadmap,
  getRoadmaps
} = require('../controllers/roadmapController');

router.route('/')
  .post(protect, createRoadmap)
  .get(protect, getRoadmaps);

module.exports = router;