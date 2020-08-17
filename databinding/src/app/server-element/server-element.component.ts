import { Component, OnInit, Input, ViewEncapsulation,OnChanges,SimpleChanges,  DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation :ViewEncapsulation.None // can use emilated ,native
  //use to encapsulate
})
export class ServerElementComponent implements OnInit, OnChanges ,DoCheck,AfterContentInit ,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
 // @Input() element : {type :string ,name :string ,content :string };
 @Input('srvElement') element : {type :string ,name :string ,content :string };  // {} javas obj recieving input as serElemt
 // isrvElement is from parent compo which is the appCompo
 @Input() name:string;
  @ViewChild('heading') header:ElementRef;


  constructor() {
    console.log('constructed called')
   }
    ngOnChanges(changes: SimpleChanges){
      console.log('ngonchanges called');
      console.log(changes);

    }

  ngOnInit(): void {
    console.log('ngOnInt called'); }
  ngDoCheck(){
    console.log('ngDoCheck called !');
  }
  ngAfterContentInit(){
    console.log('ngAftercontntInit called');

  }
  ngAfterContentChecked(){
    console.log('ngAfterContentcheck called');
  }
  ngAfterViewInit(){
    console.log('ngAfterviewinit called !');
  }
  ngAfterViewChecked(){
    console.log('ngAfterviewchecked called');
    console.log('Text Content:' + this.header.nativeElement.textContent);
  }
  ngOnDestroy(){
    console.log('ngonDestoy called');

  }

}

