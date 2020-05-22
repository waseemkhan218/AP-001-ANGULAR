import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // WORK: View Encapsulation: it's used for styles. We have 4 types in it.
  // 1. Emulated is the default one. 2. None. 3. Native. 4. ShadowDom
  encapsulation: ViewEncapsulation.Emulated  // None, Native, ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // WORK: Property binding and event binding: Passing element property to the app component or listening to app component.
  // @Input() allow access to outside of the component to listen also called binding to custom properties.

// @Input() element: {type: string, name: string, content: string};

  //WORK: Assigning an alias to custom properties

  @Input('SrvElement') element: {type: string, name: string, content: string};
  // LIFECYCLE HOOKS: Getting name as a input from app component.
  @Input() name: string;
  // LIFECYCLE HOOKS: Template access: we are trying to access the 'heading' from template
  @ViewChild('heading') header: ElementRef;
  constructor() { 
    console.log('Constructor called...!!!');
  }

  // LIFECYCLE HOOKS: ngOnChanges() is enough to log. but, it's a good practice to implement it.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called...!!!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called...!!!');
    // LIFECYCLE HOOKS: Template access:  We can't access the element in ngOnInit because the element is not
    // present at this moment in DOM.
    console.log('text content--->', this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called...!!!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called...!!!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called...!!!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called...!!!');
    // LIFECYCLE HOOKS: Template access:  We can access the element in ngAfterViewInit because the DOM is loaded
    // element is present to access. 
    // NOTE: If you want to access an element when user click on something. Then, it's better to use the
    // # Local references variables. 
    // View child is used when you want something as soon as DOM is loaded.
    console.log('text content--->', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called...!!!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called...!!!');
  }
}
