import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : String = "";
  password : String = "";

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  async login() {
    const token = await this.loginService.login(this.email, this.password);

    console.log("TOKEN:", token);
  }

}
