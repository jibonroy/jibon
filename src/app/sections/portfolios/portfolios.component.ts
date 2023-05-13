import {Component, ElementRef, HostListener} from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';


const style1 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateX(-100%)"
})
const style3 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style4 = style({
  opacity: 0,
  transform: "translateX(100%)"
})

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss'],
  animations: [
    trigger('foobar', [
      state('show', style1),
      state('hide', style2),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]
    ),
    trigger('foobar2', [
        state('show', style3),
        state('hide', style4),
        transition('show => hide', animate('1000ms ease-out')),
        transition('hide => show', animate('1000ms ease-in'))
      ]
    )
  ]
})


export class PortfoliosComponent {
  state = 'hide'
  state2 = 'hide'
  state3 = 'hide'
  state4 = 'hide'
  state5 = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition - 500) {
      this.state = 'show';
      this.state2 = 'show';
      this.state3 = 'show';
      this.state4 = 'show';
      this.state5 = 'show';
    } else {
      this.state = 'hide';
      this.state2 = 'hide';
      this.state3 = 'hide';
      this.state4 = 'hide';
      this.state5 = 'hide';
    }
  }
}
