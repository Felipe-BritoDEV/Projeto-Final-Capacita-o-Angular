import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, public authService : AuthService) { }

  ngOnInit(): void {
  }

  signUp(user: User, password: string) {
    this.authService.signUp(user, password);
  }

  return(){
    this.router.navigate(['']);
  }
}
