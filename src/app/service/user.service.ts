import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User'

@Injectable()

export class UserService {
  private userUrl: string;
  private user: User;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/users';
   }

   getUser(){}


   saveUser(userToBeSaved: User){
     return this.http.post<User>(this.userUrl, userToBeSaved);
   }
}
