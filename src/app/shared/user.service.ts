import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {Observable} from 'rxjs/Observable';
import {Http, RequestOptionsArgs} from '@angular/http';


@Injectable()
export class UserService {
  dataSource: Observable<any>;

  private request: RequestOptionsArgs;
  constructor(private logger: LoggerService, private http: Http) {

  }

  getUser( userName: string, password: string ): Observable<User> {
    // this.logger.log('dongjianjun');
   // return new User('dongjianjun', '111111');
   //  this.request = new RequestOptionsArgs();
    this.request.params['userName'] = userName;
    this.request.params['password'] = password;
    return this.http.get('/api/user', this.request).map( res => res.json());
  }

}

export class User {

  constructor(public userName: string, public password: string) {

  }
}
