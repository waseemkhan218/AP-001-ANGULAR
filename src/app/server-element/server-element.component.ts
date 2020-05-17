import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // WORK: View Encapsulation: it's used for styles. We have 4 types in it.
  // 1. Emulated is the default one. 2. None. 3. Native. 4. ShadowDom
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // WORK: Property binding and event binding: Passing element property to the app component or listening to app component.
  // @Input() allow access to outside of the component to listen also called binding to custom properties.

// @Input() element: {type: string, name: string, content: string};

  //WORK: Assigning an alias to custom properties

  @Input('SrvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
