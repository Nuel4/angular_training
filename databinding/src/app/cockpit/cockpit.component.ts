import { Component, OnInit ,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // sending outside to other components
  @Output() serverCreated = new EventEmitter<{ServerName:string ,ServerContent :string}>();
  @Output() blueprintCreated = new EventEmitter<{ServerName:string ,ServerContent :string}>();
  //newServerName = '';
  //newServerContent = '';
    @ViewChild('serverContentInput') serverContentInput : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput :HTMLInputElement){
    //console.log(this.serverContentInput);
    this.serverCreated.emit({  // calling serverCreated when clicked
      ServerName:nameInput.value,
      ServerContent:this.serverContentInput.nativeElement.value })
    //this.serverElement.push( {type : 'server' ,name : this.newServerName ,content :this.newServerContent} );
  }

  onAddBlueprint(nameInput :HTMLInputElement){
    this.blueprintCreated.emit({
      ServerName :nameInput.value, 
      ServerContent:this.serverContentInput.nativeElement.value
    //this.blueprintCreated.emit({
      //ServerName :nameInput.value, 
      //ServerContent:this.newServerContent
    });
   // this.serverElement.push( {type: 'blueprint' ,name: this.newServerName ,content :this.newServerContent});
  }

}
