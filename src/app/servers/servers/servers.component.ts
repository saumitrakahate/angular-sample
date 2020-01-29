import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  //template:'<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowUserName = false;
  serverCreationStatus:string = "Server is yet to be created!";
  serverName = 'Testserver';
  userName = '';
  serverCreated = false;
  servers = ['Test Server1','Test Server2'];
  displayDetails = false;
  clickLogs = [];
  counter = 0;

  constructor() {
    setTimeout(()=>{this.allowNewServer=true},2000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created successfully! Server name is: " + this.serverName;
  }

  onUpdateServerName(event:Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  emptyUserName(){
    this.userName = '';
  }

  changeDisplayDetails(){
    this.displayDetails = !this.displayDetails;
    //this.clickLogs.push(this.clickLogs.length + 1);
    this.clickLogs.push(new Date());
  }
}
