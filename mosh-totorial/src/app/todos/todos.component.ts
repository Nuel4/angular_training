import { Component, OnInit } from '@angular/core';
import {trigger, state, transition, style, animate} from '@angular/animations';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fade } from '../animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  
  animations: [

    fade
    /*trigger('fade' ,[
      state('void =>' ,style({opacity:0})),
      transition('void <=> *', // :enter ,:leave
      [animate(2000)
    ]),
     
    ])*/
   /* trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),*/
  ],
  
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
