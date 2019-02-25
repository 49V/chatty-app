import React from 'react';

const Message = ({ content, currentUser, type }) => {  
  return (
  <div>
    <div className="message-username">{currentUser}</div>
    <div className="message-content">{content}</div>
  </div>
  );
}
export default Message;