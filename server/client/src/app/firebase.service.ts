import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private messaging = firebase.messaging()

  private messageSource = new Subject()
  currentMessage = this.messageSource.asObservable()

  constructor(private afs: AngularFirestore) {

  }

  

  // get permission to send messages
  getPermission(user) {
    this.messaging.requestPermission()
    .then(() => {
      console.log('Notification permission granted.');
      return this.messaging.getToken()
    })
    .then(token => {
      this.saveToken(user, token)
    })
    .catch((err) => {
      console.log('Unable to get permission to notify.', err);
    });
  }


  // Listen for token refresh
  monitorRefresh(user) {
  
    this.messaging.onTokenRefresh(() => {
      this.messaging.getToken()
      .then(refreshedToken => {
        this.saveToken(user, refreshedToken)
      })
      .catch( err => console.log(err, 'Unable to retrieve new token') )
    });
  }

  

  // used to show message when app is open
  receiveMessages(user) {
    this.messaging.onMessage(payload => {
     this.messageSource.next(user);
   });

  }

  // save the permission token in firestore
  private saveToken(user, token): void {
      const currentTokens = user.fcmTokens || { }
      // If token does not exist in firestore, update db
      if (!currentTokens[token]) {
        const userRef = this.afs.collection('fcmTokens').doc(user.uid)
        const tokens = { ...currentTokens, [token]: true }
        userRef.update({ fcmTokens: tokens })
      }
  }

}