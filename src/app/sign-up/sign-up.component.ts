import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserSignUpService } from './../user-sign-up.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( private signupService : UserSignUpService, private router: Router ) {
   }

  signupForm= new User('Rob','test@test.com', '7009', 'abcd','abcd')

  ngOnInit(): void {
  }

  onSubmit():void {
    console.log(this.signupForm)
    this.signupService.addUser(this.signupForm);
    this.signupService.printAllUsers();
    this.router.navigate(['/login'])
  }
}
