import { Injectable } from '@angular/core';
import { Adaptor } from '../../shared/adaptor';
import { User } from './user';

@Injectable()
export class UserAdaptor implements Adaptor<User> {
  adapt(item: any): User {
    return new User(item.name, item.qr_code);
  }
}
