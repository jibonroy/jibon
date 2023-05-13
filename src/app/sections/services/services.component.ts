import {Component, ElementRef, HostListener} from '@angular/core';
import {Servicces} from "../../interfaces/servicces";
import { trigger, state, style, animate, transition } from '@angular/animations';


const style1 = style({
  opacity: 1,
  transform: "translateY(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translate(-40%,70%)"
})
const style3 = style({
  opacity: 1,
  transform: "translateX(0)"
})
const style4 = style({
  opacity: 0,
  transform: "translateX(70%)"
})

const style6 = style({
  opacity: 0,
  transform: "translate(40%,-100%)"
})

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
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
    ,
    trigger('foobar3', [
        state('show', style3),
        state('hide', style6),
        transition('show => hide', animate('1000ms ease-out')),
        transition('hide => show', animate('1000ms ease-in'))
      ]
    )
  ]
})
export class ServicesComponent {

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


  services:Servicces[] =[{
    header: "Website Design",
    logo: "las la-bezier-curve",
    description: "I created digital products with unique ideas use Figma & Framer",
    projects: "24 PROJECTS"
  },
    {
      header: "Development",
      logo: "las la-code",
      description: "I build website go live with Framer, Web-flow or WordPress",
      projects: "126 PROJECTS"
    },
    {
      header: "SEO/Marketing",
      logo: "las la-bezier-curve",
      description: "Increase the traffic for your website with SEO optimized",
      projects: "8 PROJECTS"
    }
  ]
}










