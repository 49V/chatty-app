import React from 'react';

const Message = ({ content, username, type }) => {
  return (
  <div>
    <span className="message-username">{username}</span>
    <span className="message-content">{content}</span>
  </div>
  );
}
export default Message;