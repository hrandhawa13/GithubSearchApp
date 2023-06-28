import { Component, EventEmitter, Output } from '@angular/core';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  githubUser: string= '';

  constructor(private githubService: GithubServiceService){}

  @Output()
  sendUserDetails: EventEmitter<string>= new EventEmitter<string>();

  emitUserDetails(){
    this.sendUserDetails.emit(this.githubUser);
    this.githubUser='';
  }
}
