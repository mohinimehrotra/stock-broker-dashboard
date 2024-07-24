const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});

const stocks = ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA'];

let stockPrices = {};
stocks.forEach(stock => {
  stockPrices[stock] = (Math.random() * 1000).toFixed(2);
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('subscribe', (stock) => {
    console.log(`Client subscribed to ${stock}`);
    setInterval(() => {
      stockPrices[stock] = (Math.random() * 1000).toFixed(2);
      socket.emit('priceUpdate', { stock, price: stockPrices[stock] });
    }, 1000);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => console.log('Listening on port 3000'));
