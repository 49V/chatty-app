import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor() {
    super();
    this.state =
      {
        currentUser: "Anon",
        messages: []
      };
  }

  addNewMessage = (newMessage) => {
    this.setState({
      currentUser: newMessage.currentUser,
      messages: [...this.state.messages, newMessage]
    });
  }

  changeName = (name) => {
    this.setState({
      currentUser: name
    });
  } 

  submitMessage = (newMessage) => {
    this.socket.send(JSON.stringify(newMessage));
    this.addNewMessage(newMessage);
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
  
    this.socket.onmessage = (event) => {
      const newMessage = JSON.parse(event.data);
      this.addNewMessage(newMessage);
    }  
  }

  render() {
    return (
      <div>
        <main className="messages">
          <MessageList messages={this.state.messages} />
        </main>
        <footer className="chatbar">
          <ChatBar currentUser={this.state.currentUser} changeName={this.changeName} submitMessage={this.submitMessage} />
        </footer>
      </div>
    );
  }
}
export default App;