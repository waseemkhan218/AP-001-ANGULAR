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

  constructor() {
    // WORK: Property Binding: SetTimeout on button 
    //() => {} is a ES6 function which is similar to function() {}.
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  getServerZone() {
    return this.serverZone;
  }

}
