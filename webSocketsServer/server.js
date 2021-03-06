const uuidv1 = require('uuid/v1');
const WebSocket = require('ws');

const express = require('express');
const SocketServer = require('ws').Server;

const PORT = 3001;

//Create a new express server
const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

// Create a new WebSockets server using the Express server
const wss = new SocketServer({ server });
let clientCount = 0;

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client Connected');
  clientCount++;

  updateClientCount(wss, clientCount);

  ws.on('close', () => {
    clientCount--;
    updateClientCount(wss, clientCount);
    console.log('Client disconnected')
  });
  

  ws.on('message', function incoming(data) {
    let formattedData = JSON.parse(data);
    const uuid = uuidv1();
    formattedData.id = uuid;
    
    if(formattedData.type === 'postMessage') {
      formattedData.type = 'incomingMessage';
    } else {
      formattedData.type = 'incomingNotification';
    }

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(formattedData));
      }
    });
  });

});

// Need to broadcast to clients so they can update their counts
function updateClientCount(webSocketServer, count) {
  webSocketServer.clients.forEach(function each(client) {
  const serverProgress = {
    type: "userCount",
    userCount: count
  };

  if (client.readyState === WebSocket.OPEN) {
    client.send(JSON.stringify(serverProgress));
  }
});
}
