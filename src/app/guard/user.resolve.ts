import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {User} from '../shared/user.service';

@Injectable()
export class UserResolve implements Resolve<User> {

  constructor(private router: Router) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    let userName: string = route.params['userName'];
    if (userName === 'dongjianjun') {
      return new User('dongjianjun2', '33434567');
    }else {
      this.router.navigate(['']);
      return undefined;
    }
  }
}
