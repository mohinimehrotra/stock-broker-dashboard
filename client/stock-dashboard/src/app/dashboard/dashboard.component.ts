import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks = ['GOOG', 'TSLA', 'AMZN', 'META', 'NVDA'];
  subscribedStocks: { [key: string]: string } = {};
  socket: any;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  ngOnInit(): void {
    this.stocks.forEach(stock => {
      this.subscribeToStock(stock);
    });
  }

  subscribeToStock(stock: string) {
    this.socket.emit('subscribe', stock);
    this.socket.on('priceUpdate', (data: { stock: string, price: string }) => {
      this.subscribedStocks[data.stock] = data.price;
    });
  }
}
