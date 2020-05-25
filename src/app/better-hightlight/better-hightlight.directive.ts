/* WORK: Better directive to render the style in app component */

import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

 // WORK: Better Directive: Using renderer for better access the DOM.  
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
 // WORK: Better Directive: Using setStyle method to set the background using elementRef.   
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }

  // WORK: HostListener to host events: Used for listening official events. 
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }
  // WORK: HostListener to host events: on mouseleave. 
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
  }
}
