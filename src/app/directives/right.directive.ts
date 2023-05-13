import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appRight]'
})
export class RightDirective {

  constructor(private el:ElementRef) { }
  @HostListener("click")
  prevFunc(){
    let element = this.el.nativeElement.parentElement.parentElement.children[0];
    let Item = element.getElementsByClassName('item');
    element.prepend(Item[Item.length-1]);
  }
}
