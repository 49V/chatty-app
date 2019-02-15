import React from 'react';

const Notification = ({currentUser, previousUser}) => {
  return (
    <div>
      <span className="message-username">{previousUser}</span>
      <span className="message-content">changed name to</span>
      <span className="message-username">{currentUser}</span>
    </div>
    );
}

export default Notification;