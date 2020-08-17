import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import {filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy {
  private firstObsSubscription :Subscription

  constructor() { }

  ngOnInit() {
   //this.firstObsSubscription= interval(1000).subscribe(count =>{
    // console.log(count);
  // });
  const customObervable=Observable.create( observer =>{
    let count=0;
    setInterval(()=>{
      observer.next(count);
      if (count ===5)
      {
        observer.complete();
      }
      if (count >3){
        observer.console.error(new Error('count is greater than 3'));      
      }
      count++;
    } ,1000);
  });
 

  // this.firstObsSubscription = customObervable.subscribe(data=>{
    //console.log(data);
    this.firstObsSubscription =customObervable.pipe( filter(data =>{
      return data > 0;
    }), map((data :number)=>{
      return 'Round :' + (data +1); // starts from round 2 since  returns when data > 0 ,then +1
  })).subscribe(data =>{
    console.log(data);

  },error=>{
    console.log(error);
    alert(error.message);
  }, ()=>{
    console.log('completed !');
  }
  );
  }  
    
    ngOnDestroy():void{
      this.firstObsSubscription.unsubscribe()
    }
  

}
