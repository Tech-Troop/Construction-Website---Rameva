import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', (req, res) => {
  // Retrieve FAQs from the database
  axios.get('/api/faqs')
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving FAQs' });
    });
});

export default router;