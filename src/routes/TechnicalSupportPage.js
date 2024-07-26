import React, { useState } from 'react';
import axios from 'axios';
import './TechnicalSupportPage.css'

function TechnicalSupportPage() {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [faqs, setFaqs] = useState([]);
  const [communityPosts, setCommunityPosts] = useState([]);

  const handleAskQuestion = (e) => {
    e.preventDefault();
    axios.post('/api/questions', { question, category })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGetFaqs = () => {
    axios.get('/api/faqs')
      .then((response) => {
        setFaqs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGetCommunityPosts = () => {
    axios.get('/api/community-posts')
      .then((response) => {
        setCommunityPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <header>
        <h1>Technical Support</h1>
        <p>Ask our staff questions, find answers, and get assistance with our products and services</p>
      </header>
      <section id="ask-question">
        <h2>Ask a Question</h2>
        <form onSubmit={handleAskQuestion}>
          <label for="question">What's your question?</label>
          <input type="text" id="question" value={question} onChange={(e) => setQuestion(e.target.value)} />
          <label for="category">Select a category</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="general">General</option>
            <option value="product-specific">Product-specific</option>
            <option value="billing">Billing</option>
          </select>
          <button type="submit">Ask Question</button>
        </form>
        <p>Ask a question and get help from our community and support team. We'll do our best to respond within 24 hours.</p>
      </section>
      <section id="faqs">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <ul>
          {faqs.map((faq) => (
            <li key={faq.id}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
        <p><a href="#" onClick={handleGetFaqs}>View all FAQs</a></p>
      </section>
      <section id="community-forum">
        <h2>Community Forum</h2>
        <ul>
          {communityPosts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
        <p><a href="#" onClick={handleGetCommunityPosts}>View all community posts</a></p>
      </section>
    </div>
  );
}

export default TechnicalSupportPage;