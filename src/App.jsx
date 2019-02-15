import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor() {
    super();
    this.state =
      {
        currentUser: "Anon",
        previousUser: "Anon",
        messages: []
      };
  }

  addNewMessage = (newMessage) => {
    this.setState({
      messages: [...this.state.messages, newMessage]
    });
  }

  addNewNotification = (newNotification) => {
    this.setState({
      messages: [...this.state.messages, newNotification]
    });
  } 

  submitMessage = (newMessage) => {
    this.socket.send(JSON.stringify(newMessage));
  }

  submitNotification = (newNotification) => {
    this.socket.send(JSON.stringify(newNotification));
  }

  updateUser = (newName) => {
    const previousUser = this.state.currentUser;
    this.setState({
      currentUser: newName,
      previousUser
    });
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
  
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      switch(data.type) {
        case 'incomingMessage':
          console.log("Client taking message")
          this.addNewMessage(data);
          break;
        case 'incomingNotification':
        console.log("Client taking notification")
          this.addNewNotification(data);
          break;
        default:
          console.log("ERROR");
      }   
    }  
  }

  render() {
    return (
      <div>
        <main className="messages">
          <MessageList messages={this.state.messages} />
        </main>
        <footer className="chatbar">
          <ChatBar updateUser={this.updateUser} currentUser={this.state.currentUser} submitMessage={this.submitMessage} submitNotification={this.submitNotification} />
        </footer>
      </div>
    );
  }
}
export default App;