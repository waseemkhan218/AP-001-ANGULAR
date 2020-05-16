import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // WORK: Property binding and event binding: Passing element property to the app component.
  // @Input() allow access to outside of the component also called binding to custom properties.

// @Input() element: {type: string, name: string, content: string};

  //WORK: Assigning an alias to custom properties

  @Input('SrvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
