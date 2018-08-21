import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {

  constructor() { }
  
  // newServerName = '';
  // newServerContent = '';

  ngOnInit(): void {
   
  }

  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();

  @ViewChild('serverContent') serverContentInput: ElementRef;

  onAddServer(serverName: HTMLInputElement) {
    console.log(serverName.value);
     this.serverCreated.emit({
     name: serverName.value,
     content: this.serverContentInput.nativeElement.value
   })
  }

  onAddBlueprint(serverName: ElementRef,  serverContent: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverName.nativeElement.value,
      content: this.serverContentInput.nativeElement.value
    })
  }

}
