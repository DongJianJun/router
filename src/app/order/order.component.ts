import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input()
  greeting: string ;

  @Output() answerEvent = new EventEmitter<any>();
  constructor() {


  }

  ngOnInit() {
    this.greeting = 'welcome';
  }

  doSubmit() {
    this.answerEvent.emit('answer you');
  }

}



