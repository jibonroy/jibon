import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLeft]'
})
export class LeftDirective {

  constructor(private el:ElementRef) { }
  @HostListener("click")
  leftFunc(){
    let element = this.el.nativeElement.parentElement.parentElement.children[0];
    let Item = element.getElementsByClassName('item');
    element.append(Item[0]);
  }
}
