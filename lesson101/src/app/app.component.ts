import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//numbers =[1,2,3,4,5]
oddNumbers=[1,3,5,7,9]
evenNumbers =[0,2,4,6,8,10]
onlyOdd =false;
value =100;
  
  name = 'lesson101';

   log =[];
  userName ='';
  showSecret =false;

  onToggleDetail()
  {
    this.showSecret =!this.showSecret;
    this.log.push(this.log.length + 1)
    this.log.push(new Date())
  }

}
