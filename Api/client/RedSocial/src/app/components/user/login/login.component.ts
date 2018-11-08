import { Router } from '@angular/router'
import { UserInterface } from './../../../models/user-interface';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) { }
  
  private user: UserInterface= {
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  onLogin(){
    return this.AuthService.loginUser(
      this.user.email,
      this.user.password
    )
    .subscribe(data => {
      this.AuthService.setUser(data.user)
      let token = data.id;
      this.AuthService.setToken(token);
      this.router.navigate(['/user/profile'])
    },
    error => console.log(error)
    );
  }

}
