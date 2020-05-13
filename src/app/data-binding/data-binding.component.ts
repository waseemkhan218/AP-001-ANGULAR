import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  // WORK: String interpolation: Displaying this two values.
  public serverId: number = 10;
  public serverStatus: string = 'Offline';
  public serverZone: string = 'USA';

  // WORK: Property Binding: Displaying a new button which allow a user to add a new server.
  public allowNewServer: boolean = false;

  // WORK: Event Binding: Listening to user.
  public serverCreationStatus: string = 'No server was created.';
  public serverName: string = 'TestServer';

  // WORK: Directives: Structural: adding a boolean
  public serverCreated: boolean = false;

  constructor() {

    // WORK: Directives: Attribute: ngStyle
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

    // WORK: Property Binding: SetTimeout on button 
    //() => {} is a ES6 function which is similar to function() {}.
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  // WORK: String interpolation
  getServerZone() {
    return this.serverZone;
  }

  // WORK: Event Binding: listening to user and displaying the text
  // WORK: Combining all forms of Databinding
  onCreateServer() {
    //WORK: Directive: 
    this.serverCreated = true;
    this.serverCreationStatus = 'Server is created now. ' + this.serverName;
  }

  //WORK: Event Binding: Passing and using data.
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // WORK: Directives: Attribute: method for ngStyle
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  // WORK: Directives: Attribute: method for ngClass
  getServerColor() {
    return this.serverStatus === 'online';
  }
}
