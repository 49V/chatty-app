import React, {Component} from 'react';

class ChatBar extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const content = event.target.elements.content.value;

    const newMessage = {
      content,
      username,
      type: 'incomingMessage'
    }

    this.props.addNewMessage(newMessage);
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="Your Name (Optional)" />
        <input type="text" name="content" placeholder="Type a message and hit ENTER" />
        <button type="submit">Send Message</button>
      </form>
    );
  }
}
export default ChatBar;