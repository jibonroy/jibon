import {Component, ElementRef, HostListener} from '@angular/core';
import {Skills} from "../../interfaces/skills";
import { trigger, state, style, animate, transition } from '@angular/animations';


const style1 = style({
  opacity: 1,
  transform: "translateY(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateY(70%)"
})
const style3 = style({
  opacity: 1,
  transform: "translateX(0)"
})
const style4 = style({
  opacity: 0,
  transform: "translate(100%,100%)"
})
const style5 = style({
  opacity: 0,
  transform: "translate(-100%,100%)"
})


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
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
    trigger('foobar3', [
        state('show', style3),
        state('hide', style5),
        transition('show => hide', animate('1000ms ease-out')),
        transition('hide => show', animate('1000ms ease-in'))
      ]
    )]
})
export class SkillsComponent {

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

  skills:Skills[] =[
    {
      logo: "../../../assets/figma.png",
      skill: "92%",
      subject: "Figma"
    },
    {
      logo: "../../../assets/framer.png",
      skill: "85%",
      subject: "Framer"
    },
    {
      logo: "../../../assets/webflow.png",
      skill: "80%",
      subject: "Webflow"
    },
    {
      logo: "../../../assets/react.png",
      skill: "90%",
      subject: "React"
    },
    {
      logo: "../../../assets/wordpress.png",
      skill: "86%",
      subject: "WordPress"
    },
    {
      logo: "../../../assets/laravel.png",
      skill: "70%",
      subject: "Laravel/PHP"
    }
  ]
}



