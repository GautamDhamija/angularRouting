import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserSignUpService {
  // let allUsers :Array<User> = null;

  allUsers: User[] = new Array();
  // signupForm= new User('Rob','test@test.com', '7009', 'abcd','abcd');


  constructor(){
  // this.allUsers.push(this.signupForm);
  }

  addUser( newUser : User ):void{
    this.allUsers.push(newUser);
  }

  printAllUsers():void{
    console.log(this.allUsers);
  }

  authenticateUser(email:string, pasw:string):boolean{
    let flag:boolean = false;
    this.allUsers.find(user =>{
      if(user.email === email){
        if(user.password === pasw){
          flag=true;
          console.log(flag)

        }
      }
    })
    // console.log(email, pasw)
    return flag;
  }


}
