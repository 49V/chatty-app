import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor() {
    super();
    this.state =
      {
        messages: [
          {
            type: 'incomingMessage',
            content: 'Test Message',
            username: 'Testi Boi'
          },
          {
            type: 'notification',
            content: 'Noti',
            username: 'Notification Guy'
          }
        ]
      }
  }

  addNewMessage = (newMessage) => {
    this.setState({
      messages: [...this.state.messages, newMessage]
    })
  }

  render() {
    return (
      <div>
        <main className="messages">
          <MessageList messages={this.state.messages} />
        </main>
        <footer className="chatbar">
          <ChatBar addNewMessage={this.addNewMessage} />
        </footer>
      </div>
    );
  }
}
export default App;