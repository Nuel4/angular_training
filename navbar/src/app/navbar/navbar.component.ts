import { Component, OnInit } from '@angular/core';
import {trigger, state ,style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

  animations :[
    trigger('popOverState' ,[
      state('show' ,style({opacity :1})),
      state('hide' ,style({opacity :0})),
      transition('show =>' ,animate('600ms ease-out')),
      transition('show =>' ,animate('1000 ease-in'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  show =false;

  constructor() { }

  ngOnInit(): void {
  }

  get stateName()
  {
    return this.show ? 'show' :'hide'
  }

  toggle()
  {
    this.show = !this.show;
  }

}
