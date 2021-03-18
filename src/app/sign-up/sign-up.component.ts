import { Component, OnInit } from '@angular/core';
import { User } from './../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  signupForm= new User('Rob','test@test.com', '7009', 'abcd','abcd')

  ngOnInit(): void {
  }

  onSubmit():void {
    console.log(this.signupForm)
  }
}
