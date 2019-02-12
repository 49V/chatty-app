import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    let messages = this.props.messages.map((message, index) => {
      return(
        <Message key={index} content={message.content} username={message.username} type={message.type}  />
      )
    })
    return (
      <div className="messages">
        {messages}
      </div>
    );
  }
}
export default MessageList;