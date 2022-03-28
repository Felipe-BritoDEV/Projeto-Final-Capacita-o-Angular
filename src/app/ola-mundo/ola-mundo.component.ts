import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-olamundo',
  templateUrl: './ola-mundo.component.html',
  styleUrls: ['./ola-mundo.component.css']
})
export class OlaMundoComponent {
  user: User;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  title = 'Olá Mundo';
}
