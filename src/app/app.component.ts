import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor (
    private router: Router,
    public auth: AuthService
    ){}

  
  
  ngOnInit() {
    this.router.navigate(['/landing'])
    
  }

}
