import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repo } from '../repo-class/repo';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root'
})
export class GitsearchRequestService {


  user: User;
  repo: Repo;

  constructor(private http:HttpClient) { 
    this.user = new User("","",0,0,0,"");
    this.repo = new Repo("","","",0,0,"");

  }


  userRequest(submit){

     var  inputUser = submit

    interface ApiResponse{
      login:string;
      avatar_url:string;
      public_repos:number;
      html_url:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/" + inputUser + "?access_token=2a23b3e4dc095aa8d13e4aad2134f9b536ad325f").toPromise().then(response=>{
        this.user.login = response.login;
        this.user.avatar_url = response.avatar_url;
        this.user.public_repos = response.public_repos;
        this.user.html_url = response.html_url;

        resolve()
  },
  error=>{
    this.user.login = "UD"
    reject(error)

   })
  })
      return promise
  }
  repoRequest(submitRepo){
    var inputRepo = submitRepo

    interface ApiResponse{
           name:string;
        html_url:string;
      description:string;
        forks:number;
        watchers_count:number;
      language:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/" + inputRepo + "/repos?access_token=2a23b3e4dc095aa8d13e4aad2134f9b536ad325f").toPromise().then(response=>{
        this.repo.name = response.name;
        this.repo.html_url = response.html_url;
        this.repo.description = response.description;
        this.repo.forks = response.forks;
        this.repo.watchers_count = response.watchers_count;
        this.repo.language = response.language;


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
