import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../chat/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public chatService: ChatService

  ) { }

  ngOnInit() {
    
  }

}
