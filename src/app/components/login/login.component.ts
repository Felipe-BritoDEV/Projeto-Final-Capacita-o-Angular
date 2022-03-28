import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
  
  }

  signIn(user: User, password: string){
    this.authService.signIn(user.email, password);
  }

}
