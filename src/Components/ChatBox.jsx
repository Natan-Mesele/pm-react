import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, Button, IconButton, Typography } from '@material-ui/core';
import { Send as SendIcon } from '@material-ui/icons';

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatBoxRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat box
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage.trim(), sender: 'user' }]);
      setNewMessage('');
    }
  };

  const handleReceiverMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'other' }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Box className="bg-white shadow-md rounded-lg p-4 flex flex-col h-full">
      <Typography variant="h7" gutterBottom className='text-gray-500'>
        Chat Box
      </Typography>
      <Box
        ref={chatBoxRef}
        className="flex-1 overflow-y-auto space-y-2 pb-4"
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg flex ${
              message.sender === 'user'
                ? 'justify-end'
                : 'justify-start'
            }`}
          >
            <Box
              className={`px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {message.text}
            </Box>
          </Box>
        ))}
      </Box>
      <Box className="flex items-center space-x-2">
        <TextField
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1"
          variant="outlined"
          placeholder="Type your message..."
        />
        <IconButton onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ChatBox;