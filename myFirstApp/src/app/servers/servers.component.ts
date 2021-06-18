import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testeserver', 'Testserver 2'];

  userName = '';
  emptyUserName = true;

  buttonDetailsClicks = [];
  showMessage = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onInputUserName(){
    if(!this.userName){
      this.emptyUserName = true;
      return this.emptyUserName;
    }
    this.emptyUserName = false;
    return this.emptyUserName;
  }

  cleanUserName(){
    this.userName = '';
  }

  onShowMessage() {
    this.showMessage = !this.showMessage;
    this.buttonDetailsClicks.push(new Date());
  }
}
