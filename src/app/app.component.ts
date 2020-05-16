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
}
