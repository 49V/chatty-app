import React, {Component} from 'react';

class ChatBar extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("SECOND");
    const currentUser = (event.target.elements.username.value === "") ? "Anon" : event.target.elements.username.value;
    const content = event.target.elements.content.value;

    const newMessage = {
      content,
      currentUser,
      type: 'incomingMessage'
    }

    event.target.elements.content.value ='';
    this.props.submitMessage(newMessage);
  }

  handleNameChange = (event) => {
    if(event.key === 'Enter') {
      event.preventDefault();    
      const name = event.target.value;
      this.props.changeName(name);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" onKeyDown={this.handleNameChange} defaultValue={this.props.currentUser} />
        <input type="text" name="content" placeholder="Type a message and hit ENTER" />
        <button type="submit">Send Message</button>
      </form>
    );
  }
}
export default ChatBar;