import {Component, ElementRef, HostListener} from '@angular/core';
import {Education} from "../../interfaces/education";
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
  transform: "translate(20%,70%)"
})


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger('foobar', [
        state('show', style1),
        state('hide', style2),
        transition('show => hide', animate('700ms ease-out')),
        transition('hide => show', animate('700ms ease-in'))
      ]
    ),
    trigger('foobar2', [
        state('show', style3),
        state('hide', style4),
        transition('show => hide', animate('700ms ease-out')),
        transition('hide => show', animate('700ms ease-in'))
      ]
    )
  ]


})
export class ResumeComponent {
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


  educationDetails1:Education = {
    year: "2023 - Present",
    subject: "Angular Web Development",
    agency: "SoftLab IT"
  }
  educationDetails2:Education  = {
    year: "2023 - Present",
    subject: "Wordpress Development (Front-End)",
    agency: "Dreamland IT"
  }
  educationDetails3:Education  = {
    year: "2023 - Present",
    subject: "Computer Science and Engineering Technology",
    agency: "Rangpur Polytechnic Institute (5th Semester)"
  }

  educationDetails4:Education  = {
    year: "2022",
    subject: "Web Design & Development",
    agency: "Dreamland IT"
  }
  educationDetails5:Education  = {
    year: "2022",
    subject: "Digital Marketing",
    agency: "Innovate IT "
  }
  educationDetails6:Education  = {
    year: "2018 - 2020",
    subject: "SSC Exam Certificate",
    agency: "Annadanagar M/L High School"
  }

}
