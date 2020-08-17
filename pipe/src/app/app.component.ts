import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';


appStatus = new Promise((resolve ,reject) =>{
  setTimeout(()=>{
    resolve('stable');
  },2000);
})
  servers =[
   {
    instanceType : 'Medium',
    name :'Production',
    status :'stable',
    started : new Date(15 ,1,2017)
   },
   {
    instanceType : 'Large',
    name :'User Database',
    status :'stable',
    started : new Date(15 ,1,2017)
   },
   {
    instanceType : 'Small',
    name :'Development Server',
    status :'offline',
    started : new Date(15 ,1,2017)
   },
   {
    instanceType : 'Small',
    name :'Testing Environmental Server',
    status :'stable',
    started : new Date(15 ,1,2017)
   }
  ]
  filteredStatus="";

  getStatusClasses(server :{ instanceType :string ,name :string ,status :string ,started :Date})
  {
    return {
      'list-group-item-success' :server.status === 'stable',
      'list-group-item-warning' :server.status === 'offline',
      'list-group-item-danger' :server.status === 'critical',
    }
  }
  onAddServer(){
    this.servers.push({
      instanceType : 'Small',
    name :'New Server',
    status :'stable',
    started : new Date(15 ,1,2017)

    });
  }
}
