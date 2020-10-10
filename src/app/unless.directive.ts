import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: string){
    if(!condition){
      this.viewCont.createEmbeddedView(this.templateRef);
    }else{
      this.viewCont.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewCont: ViewContainerRef) { }

}
