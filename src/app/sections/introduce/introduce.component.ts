import {Component, ElementRef, HostListener, Input} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


const style1 = style({
  opacity: 1,
  transform: "translateY(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateY(70%)"
})

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss'],
  animations: [
    trigger('foobar', [
        state('show', style1),
        state('hide', style2),
        transition('show => hide', animate('1000ms ease-out')),
        transition('hide => show', animate('1000ms ease-in'))
      ]
    )
  ]
})
export class IntroduceComponent {
  state = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition - 500) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }

  public open:boolean = false;
  toggleClass(){
    this.open = !this.open;
  }


}
