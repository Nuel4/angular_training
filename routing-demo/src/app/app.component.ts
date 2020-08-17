import { Component } from '@angular/core';
import {trigger, state ,style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('divState' ,[
     state('normal',style({'background-color':'red;', transform :'translateX(0)'})),
      state('newhighlighted',style({'background-color':'blue;' ,transform :'translateX(100px)'})),
      transition('normal <=> nowhighlighted' ,animate(1000))
   
    ])
  ]
})
export class AppComponent {
  title = 'routing-demo';

  state ='normal';

  onAnimate(){
    this.state== 'normal' ? this.state='newhighlighted' :this.state='normal';
  }
}
