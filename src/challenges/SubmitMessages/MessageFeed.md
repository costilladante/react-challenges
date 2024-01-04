# Submit messages - 🟢 Easy

You’re presented with a component called MessageFeed. This component has already been designed. Your task is to write the necessary logic to make it work as expected.

`MessageFeed` displays a feed box with past messages. Below the feed box, you can find an input element where the user can type in their message. Add the necessary code to append the user message to the existing message feed when the user presses `Shift + Enter` on their keyboard.

## Directions

- You don’t need to worry about styling your application as we have already done it for you. But if you wish to update the styles, you can use styled-components, inline style or tailwindcss.

- Do not edit the data-testid attributes.

- You only need to add the message submission logic.

- Do not let users submit empty messages.

## Solution

```javascript
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MessageFeed = () => {
  const [messages, setMessages] = useState([
    'The minute she landed she understood the reason this was a fly-over state.',
    "She thought there'd be sufficient time if she hid her watch.",
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.shiftKey && e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.length > 0) {
        setMessages([...messages, inputValue]);
        setInputValue('');
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [messages, inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <MessageFeedContainer>
      <MessageContainer data-testid='message-container'>
        {messages.map((message, index) => (
          <Message data-testid='message' key={index}>
            {message}
          </Message>
        ))}
      </MessageContainer>
      <MessageInput
        data-testid='message-input'
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='Type your message and press Shift + Enter to send'
      />
    </MessageFeedContainer>
  );
};

export default MessageFeed;

const MessageFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 80vh;
  margin-bottom: 10px;
`;

const Message = styled.div`
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const MessageInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  &:focus {
    border-color: #999;
  }
`;
```

First, the component initializes two state variables using the useState hook: messages, which is an array of past messages, and inputValue, which is the current value of the input field. The messages array is initialized with two sample messages.

The component also defines a function called handleKeyDown which is responsible for appending a new message to the messages array when the user presses Shift + Enter. The function checks if the shiftKey and key properties of the event object (e) correspond to the Shift + Enter key combination. If so, it prevents the default behavior of the event (which would be to insert a new line), and adds a new message to the messages array if the input value is not empty. Finally, it resets the input value to an empty string.

The useEffect hook is used to add an event listener for the keydown event on the document. The handleKeyDown function is registered as the event listener. The hook also returns a cleanup function that removes the event listener when the component is unmounted or when either messages or inputValue change.

The handleChange function is a simple event handler that updates the inputValue state variable whenever the value of the input field changes.

Finally, the component renders the message feed container (MessageContainer) and the input field (MessageInput). The messages array is mapped over to render each message as a Message component inside the MessageContainer.
