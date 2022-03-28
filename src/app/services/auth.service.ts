import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth : AngularFireAuth,
    private firestore : AngularFirestore,
    private router : Router
  ) { }


  singUp(email: string, password: string){
    this.afAuth.createUserWithEmailAndPassword(email, password);
  }
}
