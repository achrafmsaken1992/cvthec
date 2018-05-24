import { Injectable }          from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth }     from 'angularfire2/auth';
import * as firebase from 'firebase';

import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import {AngularFirestore} from "angularfire2/firestore";
import {tap} from "rxjs/internal/operators";
import {FirebaseApp, FirebaseMessaging} from "angularfire2";
import {AuthService} from "./auth.service";

@Injectable()
export class MessagingService {

  messaging = firebase.messaging()
  currentMessage = new BehaviorSubject(null)

  constructor(private afs: AngularFirestore,private db: AngularFireDatabase, private afAuth: AngularFireAuth,private auth:AuthService) { }

  private saveTokenToFirestore(token) {
    if (!token) return;

    const devicesRef = this.afs.collection('devices')

    const docData = {
      token,
      userId: 'testUser',
    }

    return devicesRef.doc(token).set(docData)
  }

  updateToken(token) {
    this.afAuth.authState.take(1).subscribe(user => {
      if (!user) return;

      const data = { [user.uid]: token }
      this.db.object('fcmTokens/').update(data)
    })
  }

  getPermission(resp) {
    this.messaging.requestPermission()
        .then(() => {
          console.log('Notification permission granted.');
          return this.messaging.getToken()
        })
        .then(token => {
          console.log(token)
          console.log("samerrrrrrrrrrrrrrrrrrrrr")
         // this.updateToken(token)
           this.auth.updateNotification(token,resp.id).subscribe(resp=>{


           });
          this.saveTokenToFirestore(token);
        })
        .catch((err) => {
          console.log('Unable to get permission to notify.', err);
        });
  }

  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log("Message receivedjhjkhgdjdhjkhdkhdjkhjdkh. ", payload);

      this.currentMessage.next(payload)


    });


  }





}