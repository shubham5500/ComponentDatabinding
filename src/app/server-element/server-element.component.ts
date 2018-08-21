import { Component, OnInit, Input, SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('srvelement') name;
  @ViewChild('headingValue') heading : ElementRef; 
  @ContentChild('paragraphContent') paraContent: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.heading.nativeElement.textContent);
    console.log(this.paraContent.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.name.isFirstChange()); 
  }
  
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.heading.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('destroyed!');
  }
  
  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.paraContent.nativeElement.textContent);
  }
}
