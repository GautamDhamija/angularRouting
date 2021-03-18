import { Component, OnInit } from '@angular/core';
import { UserSignUpService } from './../user-sign-up.service';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuthData = {
    email:"",
    password:""
  }

  constructor(private signupService : UserSignUpService, private router: Router) { }

  ngOnInit( ): void {
    console.log("this is on login page");
    this.signupService.printAllUsers();
  }
  authUser(): void{
    console.log("button pressed");
    console.log(this.userAuthData);


    if(this.signupService.authenticateUser(this.userAuthData.email, this.userAuthData.password)){
      this.router.navigate(['/home'])
      console.log("User Authenticated");
    }
    else{

      console.log("Invalid Username/Password")
      alert("Invalid Username/Password")
    }
    
    

  }

}
