import express from 'express';
import Media from '../models/mediaModel';

const router = express.Router();

// Get all media items
router.get('/', async (req, res) => {
  try {
    const media = await Media.find();
    res.json(media);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get media items by type
router.get('/:type', async (req, res) => {
  try {
    const media = await Media.find({ type: req.params.type });
    res.json(media);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new media item
router.post('/', async (req, res) => {
  const media = new Media({
    title: req.body.title,
    type: req.body.type,
    rating: req.body.rating,
  });

  try {
    const newMedia = await media.save();
    res.status(201).json(newMedia);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a media item
router.patch('/:id', async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    if (req.body.title) media.title = req.body.title;
    if (req.body.type) media.type = req.body.type;
    if (req.body.rating) media.rating = req.body.rating;
    const updatedMedia = await media.save();
    res.json(updatedMedia);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a media item
router.delete('/:id', async (req, res) => {
  try {
    const media = await Media.findById(req.params.id);
    await media.remove();
    res.json({ message: 'Media item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
