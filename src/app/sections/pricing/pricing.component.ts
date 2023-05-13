import {Component, ElementRef, HostListener} from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';


const style1 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translate(100%,-50%)"
})
const style3 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style4 = style({
  opacity: 0,
  transform: "translate(-100%,-50%)"
})

const style5 = style({
  opacity: 0,
  transform: "translateY(-70%)"
})

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
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
    ),
    ,
    trigger('foobar3', [
        state('show', style1),
        state('hide', style5),
        transition('show => hide', animate('1000ms ease-out')),
        transition('hide => show', animate('1000ms ease-in'))
      ]
    )
  ]
})
export class PricingComponent {
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

}
