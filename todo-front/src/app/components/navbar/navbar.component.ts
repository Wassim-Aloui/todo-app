import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/cors/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  connected: boolean = false;
  constructor(private userService: UserService , private router : Router) { }

  ngOnInit(): void {
    this.connected = this.userService.isLoggedIn();
  }



  logout(){
    this.userService.logout()
    this.connected = false ;
    this.router.navigateByUrl('/')
    

  }
}
