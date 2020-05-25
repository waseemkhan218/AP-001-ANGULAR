/* WORK: Better directive to render the style in app component */

import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  // WORK: HostBinding: We can the previous which is a better way of accessing depending on the use case.
  // But here, We are just trying to access the style from DOM. So, we can use this approach as well.
  // NOTE: In host binding: We can use the 'background-color' because DOM doesn't know the Dashes (-). 
  // Always use camelCase.
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  // WORK: Better Directive: Using renderer for better access the DOM.  
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // WORK: Better Directive: Using setStyle method to set the background using elementRef.   
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }

  // WORK: HostListener to host events: Used for listening official events. 

  // @HostListener('mouseenter') mouseover(eventData: Event) {
  //   this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  // }

  // WORK: HostListener to host events: on mouseleave. 

  // @HostListener('mouseleave') mouseleave(eventData: Event) {
  //   this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
  // }

  // WORK: HostListener to host events: Used for listening official events. 
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'blue';
  }

  // WORK: HostListener to host events: on mouseleave. 
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
  }
}
