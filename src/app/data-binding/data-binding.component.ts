import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
// WORK: String interpolation: Displaying this two values.
public serverId: number = 10;
public serverStatus: string = 'Offline';
public serverZone:string = 'USA';

getServerZone() {
  return this.serverZone;
}

}
