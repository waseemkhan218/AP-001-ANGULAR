/* WORK: Custom structural directives: */
import { Directive, TemplateRef,
ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {
  // WORK: we are getting access to template using templateRef and then we are giving access to view container
  // viewContainerRef: It's a create a view for us
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  // WORK: we are getting number as a input from app.component
  // NOTE: The set appDelay should be same as selector name.
  @Input() set appDelay(time: number) {
    setTimeout(()=>{
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, time);
  }
}