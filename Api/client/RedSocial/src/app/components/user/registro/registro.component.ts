import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) { }

  private user: UserInterface= {
    name: '',
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  onRegister(): void{
    this.AuthService.regiterUser(
      this.user.name,
      this.user.email,
      this.user.password
    )
    .subscribe( user => {
      this.AuthService.setUser(user);
      let token = user.id;
      this.AuthService.setToken(token);
      this.router.navigate(['/user/profile']);
    });
  }

}