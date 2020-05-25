/* WORK: Basic directive to render the style in app component
We use @Directive to say it's a directives 
and selector with property binding helps us to use without property binding in app.component.html */

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // WORK: Basic directive: We are using elementRef to get the style.
    constructor(private eleRef: ElementRef) { 
    }

    ngOnInit() {
        this.eleRef.nativeElement.style.backgroundColor = 'green';
    }
}