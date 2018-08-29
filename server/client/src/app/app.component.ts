import { Component,OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AngularFireAuth }     from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hello World from Angular 2!';
  message
  constructor(private msgService: FirebaseService,
    private afAuth: AngularFireAuth,
    private auth:AuthService,
  ) {}
  ngOnInit() {
    this.auth.user
    .filter(user => !!user) // filter null
    .take(1) // take first real user
    .subscribe(user => {
      if (user) {
        this.msgService.getPermission(user)
        this.msgService.monitorRefresh(user)
        this.msgService.receiveMessages(user)
       this.message = user
      }
    })
  }
  
}
