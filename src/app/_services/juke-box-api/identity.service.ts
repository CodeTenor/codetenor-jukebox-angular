import { Injectable } from '@angular/core';
import { User } from 'src/app/_models/jukebox-api/user/user';
import { UserAdaptor } from 'src/app/_models/jukebox-api/user/user-adaptor';

const TOKEN = 'TOKEN';
const CURRENT_USER = 'CURRENT_USER';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor(private userAdaptor: UserAdaptor) { }

  setToken(token: string) {
    localStorage.setItem(TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  setCurrentUser(currentUser: User) {
    localStorage.setItem(CURRENT_USER, JSON.stringify(currentUser));
  }

  getCurrentUser(): User {
    return this.userAdaptor.adapt(JSON.parse(localStorage.getItem(CURRENT_USER)));
  }
}
