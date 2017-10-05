import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {User, UserService} from '../shared/user.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  greeting: string;
  answer: string;
  divClass: string;
  busDate: Date= new Date();


  constructor(private userService: UserService, ) {
    setTimeout( () => {
      this.divClass = 'a b c';
    }, 3000);
  }


  ngOnInit(): void {
    this.userService.getUser('dongjianjun', '11111111' ).subscribe(
      user => this.user = user
    );
  }

  answerHandler(event: string) {
    let a: number ;
    a = 3;
    this.answer = event;
  }
}
