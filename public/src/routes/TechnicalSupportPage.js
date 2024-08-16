import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MiniChat from '../components/MiniChat';
import SupportGrid from '../components/SupportGrid';
import './TechnicalSupportPage.css'

const TechnicalSupportPage = () => {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [faqs, setFaqs] = useState([]);
  const [communityPosts, setCommunityPosts] = useState([]);

  const handleAskQuestion = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/questions', { question, category });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetFaqs = async () => {
    try {
      const response = await axios.get('/api/faqs');
      setFaqs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetCommunityPosts = async () => {
    try {
      const response = await axios.get('/api/community-posts');
      setCommunityPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='Techsupportpagecontainer'>

        <h1>Suport by Area</h1>
        <SupportGrid />
        <h1>Ask our Staff</h1>
        <MiniChat />

    </div>
  );
};

export default TechnicalSupportPage;
