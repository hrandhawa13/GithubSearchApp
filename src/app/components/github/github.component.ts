import { Component, OnInit } from '@angular/core';
import { GithubDetails } from 'src/app/models';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user: string = 'hrandhawa13';
  userDetails: GithubDetails | undefined;
  constructor(private githubService: GithubServiceService) { }

  ngOnInit(): void {
    this.getUser(this.user);
  }

  getUser(data: string) {
    this.user = data;
    this.githubService.getUserDetails(this.user).subscribe((res) => {
      this.userDetails = res;
    }, (err) => {
      this.userDetails = undefined;
    });
  }
}
