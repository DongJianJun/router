///<reference path="../../../node_modules/@types/jquery/index.d.ts"/>
import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User, UserService} from '../shared/user.service';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataSource: Observable<any>;
  private user: User;
  public userName: string;
  public password: string;
  constructor(private router: Router, private userService: UserService, private http: Http ) {
   // this.dataSource = this.http.get('/api/user').map((res) => res.json());
  }

  ngOnInit() {
    //  this.dataSource.subscribe(
    //    (data) => this.user = data
    //  );
  }

  doLogin() {
     this.userName = $('#userName').val().toString();
    this.password = $('#password').val().toString();
   //  this.userService.getUser(this.userName, this.password).subscribe(
   //    user => this.user = user
    //  );
      if ( this.userName === 'dongjianjun' && this.password === '11111111') {
        console.log('登录成功');
        this.router.navigate(['/home', this.userName]);
      }



  }

}



