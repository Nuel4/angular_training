import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements= [{ type: 'server' , name :'Testserver' ,content : 'Just A Test'}];
  // Having an array of servers.this is where we manage all the severs in the app.All servers should alike
  onServerAdded(ServerData : {ServerName :string , ServerContent :string}){
 // serverData contain serverName and ServerContent
  this.serverElements.push( {
    type : 'server' ,   
     name :ServerData.ServerName ,
    content: ServerData.ServerContent} );
  }

  onBlueprintAdded(blueprintData : {ServerName :string ,ServerContent :string}){

    this.serverElements.push( {
      type: 'blueprint' ,name: blueprintData.ServerName ,content :blueprintData.ServerContent});
  }
  onChangeFirst(){
    this.serverElements[0].name ='Changed !';

  }
  onDestroyFirst(){
    this.serverElements.splice(0 ,1);
  }

}
