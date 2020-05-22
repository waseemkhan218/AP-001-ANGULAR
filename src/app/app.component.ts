import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // WORK: Property binding: Hardcoding a object.
  serverElements = [{type: 'server', name:'TestServer', content:'Just a test'}];

  //WORK: onServerAdded() method is expecting a serverData event object with serverName and serverContent.
  // Which we are pushing to serverElement and then it's getting loop in app.component.html using ngFor.

  // WORK: Assignment
 oddNumbers: number[] = [];
 evenNumbers: number[] = [];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  // WORK: LIFECYCLE HOOKS: this event is for ngOnChanges in server element to call. 
  onChangesFirst() {
    this.serverElements[0].name = 'changes';
  }

  // WORK: LIFECYCLE HOOKS: this event is for ngOnDestroy in server element to call. 
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

// WORK: Assignment 
  onIntervalFired(firedNumber: number) {
    console.log('intervalfired method-->', firedNumber);
    if(firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    }
    else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
