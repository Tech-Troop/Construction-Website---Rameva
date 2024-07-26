import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', (req, res) => {
  // Retrieve community posts from the database
  axios.get('/api/community-posts')
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
        console.log(error); 
    });
});
