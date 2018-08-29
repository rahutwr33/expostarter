import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket; 
  url='http://localhost:8080' 
  constructor() {
    this.socket = io(this.url);

    this.socket.on('message', (message) => {
      console.log(message) 
     });

     this.socket.on('customevent', function(data){
     });

  }
}
