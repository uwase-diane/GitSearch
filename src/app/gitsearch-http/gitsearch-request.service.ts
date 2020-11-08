import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class GitsearchRequestService {


  user: User;

  constructor(private http:HttpClient) { 
    this.user = new User("","",0);
  }
  // var  inputUser = login;

  userRequest(){
    interface ApiResponse{
      login:string;
      avatar_url:string;
      public_repos:number;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        this.user.public_repos = response.public_repos

        resolve()
  },
  error=>{
    this.user.login = "UD"
    reject(error)

   })
  })
      return promise
  }
}
