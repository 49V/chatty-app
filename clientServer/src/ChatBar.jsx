import React, {Component} from 'react';

class ChatBar extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const currentUser = (event.target.elements.username.value === "") ? "Anon" : event.target.elements.username.value;
    const content = event.target.elements.content.value;
    const previousUser = this.props.previousUser;

    const newMessage = {
      content,
      currentUser,
      previousUser,
      type: 'postMessage'
    }

    event.target.elements.content.value ='';
    this.props.submitMessage(newMessage);
  }

  handleNameChange = (event) => {
    if(event.key === 'Enter') {
      event.preventDefault();    
      const newName = event.target.value;
      const previousUser = this.props.currentUser;

      this.props.updateUser(newName);

      const newNotification = {
        currentUser: newName,
        previousUser,
        type: 'postNotification'
      }

      this.props.submitNotification(newNotification);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="username" type="text" name="username" onKeyDown={this.handleNameChange} defaultValue={this.props.currentUser} />
        <input id="message" type="text" name="content" placeholder="Press ENTER to send a message" />
        <button id="send-button" type="submit"><i className="far fa-paper-plane"></i></button>
      </form>
    );
  }
}
export default ChatBar;