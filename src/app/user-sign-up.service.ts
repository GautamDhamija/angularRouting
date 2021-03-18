import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserSignUpService {
  // let allUsers :Array<User> = null;

  allUsers: User[] = new Array();

  addUser( newUser : User ):void{
    this.allUsers.push(newUser);
  }

  printAllUsers():void{
    console.log(this.allUsers);
  }


}
