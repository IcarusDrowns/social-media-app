const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['movie', 'tvSeries', 'song', 'book'],
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
  },
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;
