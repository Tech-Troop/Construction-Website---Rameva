import express from 'express';
import axios from 'axios';

const router = express.Router();

router.post('/', (req, res) => {
  const { question, category } = req.body;
  // Save the question to the database
  axios.post('/api/questions', { question, category })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: 'Error saving question' });
    });
});

export default router;