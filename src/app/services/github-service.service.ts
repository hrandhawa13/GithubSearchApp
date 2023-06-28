import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GithubDetails } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  BASE_URL: string = "https://api.github.com/users/";
  userDetails: GithubDetails | undefined;
  constructor(private http: HttpClient) { }
  
  getUserDetails(user: string) {
    console.log('base',this.BASE_URL);
    console.log('user',user);
    return this.http.get<GithubDetails>(this.BASE_URL+user);
  }
}
