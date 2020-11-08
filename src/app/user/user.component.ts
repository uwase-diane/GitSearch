import { Component, OnInit } from '@angular/core';
import { GitsearchRequestService } from '../gitsearch-http/gitsearch-request.service';
import { User } from '../user-class/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  submit = "";

  submitRepos() {
    this.userService.userRequest(this.submit)
    console.log(this.submit)
  }
  constructor(private userService: GitsearchRequestService) { }

  ngOnInit(): void {
    this.userService.userRequest("uwase-diane")
    this.user = this.userService.user
  }

}
