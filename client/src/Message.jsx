import React from 'react';

const Message = ({ content, currentUser, type }) => {  
  return (
  <div>
    <span className="message-username">{currentUser}</span>
    <span className="message-content">{content}</span>
  </div>
  );
}
export default Message;