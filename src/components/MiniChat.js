import React, { useState } from 'react';
import styled from 'styled-components';
import './MiniChat.css'

// Theme colors for consistency
const colors = {
  backgroundDark: '#111',
  backgroundLight: '#222',
  textLight: '#f1f1f1',
  textDark: '#333',
  accent: '#ffcc00',
  hoverAccent: '#e6b800',
};

const ChatContainer = styled.div`
  padding: 20px;
  background-color: ${colors.backgroundLight};
  width: 60%;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 500px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #333;
  color: ${colors.textLight};
`;

const ChatMessage = styled.div`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: #444;
  color: ${colors.textLight};
  width: fit-content;
  max-width: 70%;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #555;
  background-color: #333;
  color: ${colors.textLight};
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: ${colors.accent};
  color: ${colors.backgroundDark};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.hoverAccent};
  }
`;

const MiniChat = () => {
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage = { text: messageInput, user: 'User' };
      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  const handleResponseMessage = (messageIndex) => {
    const originalMessage = messages[messageIndex];
    const responseMessage = { text: `Response to: ${originalMessage.text}`, user: 'Responder' };
    setMessages([...messages, responseMessage]);
  };

  return (
    <ChatContainer>
      <MessagesContainer role="log" aria-live="polite">
        {messages.map((message, index) => (
          <ChatMessage key={index} onClick={() => handleResponseMessage(index)}>
            <strong>{message.user}:</strong> {message.text}
          </ChatMessage>
        ))}
      </MessagesContainer>
      <InputContainer className='questionInputContainer'>
        <Input
          type="text"
          placeholder="Type your question here..."
          aria-label="Type your message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <Button onClick={handleSendMessage} aria-label="Send message" className='askCommunityBtn'>
          Ask
        </Button>
      </InputContainer>
    </ChatContainer>
  );
};

export default MiniChat;
