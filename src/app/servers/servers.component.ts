import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // WORK: Selector: changing selector as attribute refer app.component.html
  // selector:'[app-servers]',
  // WORK: Selector: using it as a css property.
  // selector:'.app-servers',
  templateUrl: './servers.component.html',
  // WORK: Component Templates: We can use inline HTML. If we have anything to show in HTML.
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
