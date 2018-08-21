import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type: 'server',
    name: 'First Server',
    content: 'Test Content'
  }];

  onServerCreated(serverData: {name: string, content: string}){
     this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintCreated(blueprintData: {name: string, content: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    })
  }
  
  changingName(){
    this.serverElements[0].name = 'Shubham';
  }

  destroying(){
    this.serverElements.splice(this.serverElements.length-1, this.serverElements.length);
  }

}
