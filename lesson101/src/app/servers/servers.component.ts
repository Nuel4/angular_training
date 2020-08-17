import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer :boolean =false;
  serverCreationStatus:string ='No server created !';
  serverName ='Testserver';
  serverCreated =false;
  servers =['Testserver 1' ,'Testserver 2'];

  constructor() {
    setTimeout(() => {this.allowNewServer =true;}, 2000); 
  }

  ngOnInit(): void {}

  onCreateServer()
  {
    this.servers.push(this.serverName);
    this.serverCreated =true;
    this.serverCreationStatus ='Server Created !' + this.serverName;
  }
  upDateServerName(event:Event)
  {
    this.serverName=(<HTMLInputElement>event.target).value;
    //console.log(event);

  }


}
