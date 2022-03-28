import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  

  constructor(
    private afAuth : AngularFireAuth,
    private firestore : AngularFirestore,
    private router : Router
  ) { }

  

  signUp(user: User, password: string){
    return this.afAuth
      .createUserWithEmailAndPassword(user.email, password)
      .then((result: any ) => {
        this.SetUserData(result.user, user);
        this.router.navigate(['']);
      })
      .catch((error: any) => {
        //this.displayMessage(error.message, true);
        console.log(error);
      });
  }

  signIn(email: string, password: string){
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        this.GetUserData(result.user?.uid).then((users) => {
          users.forEach((user) => {
            localStorage.setItem('user', JSON.stringify(user.data()))
          })
        });
        this.router.navigate(['ola-mundo']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async GetUserData(uid: string){
    const docRef = this.firestore.collection('users').ref;

    return await docRef.where('uid', '==', uid).get();
  }

  SetUserData(LoginResponse: any, user: User) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `users/${LoginResponse.uid}`
    );
    const userData: User = {
      uid: LoginResponse.uid,
      email: user.email,
      name: user.name,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }


}
