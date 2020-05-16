import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // WORK: Binding to Custom Events: We are passing event output of this component to (app component)
  // @Output() allows to the component to pass the event out of the component or listenable.
  // Make sure you have Event Emitter from angular core. This helps to emit this new object.

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // WORK: Assigning an alias to Custom events
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    // WORK: Binding to custom events: serverCreated is a property which we are emitting with server name and server content.
   this.serverCreated.emit({
     serverName: this.newServerName,
     serverContent: this.newServerContent
   });
  }

  onAddBlueprint() {
     // WORK: Binding to custom events: blueprintCreated is a property which we are emitting with server name and server content.
  this.blueprintCreated.emit({
    serverName: this.newServerName,
    serverContent: this.newServerContent
  });
  }

}
