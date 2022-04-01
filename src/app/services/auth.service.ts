import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public _showNavBar: boolean = false;

  userData: any;

  constructor(
    private afAuth : AngularFireAuth,
    private firestore : AngularFirestore,
    private router : Router,
    private ngZone: NgZone
  ) { 
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  

  signUp(u: User, password: string){
    return this.afAuth
      .createUserWithEmailAndPassword(u.email, password)
      .then(() => this.SendVerificationMail())
      .then((result: any ) => {
        this.SetUserData(result.user, u);
        this.router.navigate(['verify-email']);
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
          this._showNavBar = true;
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

  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }


  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }


  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  /*AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }*/


  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }


  get showNavBar(): boolean{
    return this._showNavBar;
  }
}
