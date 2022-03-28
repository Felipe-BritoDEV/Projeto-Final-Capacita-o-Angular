import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService : AuthService) {

  }
  
  ngOnInit(){
    console.log(this.authService.showNavBar)
  }

  get showNavBar(): boolean {
    console.log(this.authService.showNavBar)
    return this.authService.showNavBar;
  }
}
