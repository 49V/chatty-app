import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';

class MessageList extends Component {
  render() {
    
    let messages = this.props.messages.map((message, index) => {
      if(message.type === 'incomingMessage') {
        
        return(
          <Message key={index} content={message.content} currentUser={message.currentUser} type={message.type}  />
        );
      } else {
        return(
          <Notification key={index} currentUser={message.currentUser} />
        );
      }
    });

    return (
      <div className="messages">
        {messages}
      </div>
    );
  }
}
export default MessageList;