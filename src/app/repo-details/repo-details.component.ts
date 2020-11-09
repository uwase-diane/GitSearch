import { Component, OnInit } from '@angular/core';
import { GitsearchRequestService } from '../gitsearch-http/gitsearch-request.service';
import { Repo } from '../repo-class/repo';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  repo: Repo;
  submitRepo = "";

  submitRepos() {
    this.userService.repoRequest(this.submitRepo)
    console.log(this.submitRepo)
  }

  constructor(private userService: GitsearchRequestService) { }

  ngOnInit(){
    this.userService.repoRequest("uwase-diane")
    this.repo = this.userService.repo;
  }

}
