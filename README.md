# Stock Broker Client Web Dashboard

## Overview

This project is a Stock Broker Client Web Dashboard that allows users to:
- Log in using their email
- Subscribe to a supported stock via the stock ticker code (e.g., GOOG, TSLA)
- Update the stock prices of subscribed stocks without refreshing the dashboard
- Support at least two users who subscribe to different stocks, with the dashboards updating asynchronously while both are open

## Technologies Used

- Frontend: Angular
- Backend: Node.js, Express, Socket.io
- WebSockets: For real-time updates

## Features

- Real-time stock price updates
- User login
- Stock subscription and updates
- Asynchronous updates for multiple users

## Installation

### Prerequisites

- Node.js (v14.x or later)
- Angular CLI (v12.x or later)

### Backend

1. Navigate to the `server` directory:
   cd server
2.Install the dependencies:
  npm install
3.Start the backend server:
  node server.js
### Frontend
1. Open a new terminal and navigate to the `client` directory:
  cd client
2.Install the dependencies:
  npm install
3.Start the Angular development server:
  ng serve

## Usage
1.Ensure the backend server is running.

2.Open the frontend application in your browser at http://localhost:4200.

3.Log in using your email.

4.Subscribe to the stocks and view real-time updates.
