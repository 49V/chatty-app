import React, {Component} from 'react';

class ChatBar extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    //this.props.currentUser
    const username = (event.target.elements.username.value === "") ? "Anon" : event.target.elements.username.value;
    const content = event.target.elements.content.value;

    const newMessage = {
      content,
      username,
      type: 'incomingMessage'
    }

    event.target.elements.content.value ='';
    this.props.submitMessage(newMessage);
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" defaultValue={this.props.currentUser} />
        <input type="text" name="content" placeholder="Type a message and hit ENTER" />
        <button type="submit">Send Message</button>
      </form>
    );
  }
}
export default ChatBar;