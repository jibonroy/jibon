import {Component, ElementRef, HostListener} from '@angular/core';
import {ClientsDeta} from "../../interfaces/clients-deta";
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
const style6 = style({
  opacity: 0,
  transform: "translateY(-100%)"
})

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
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
        transition('show => hide', animate('1000ms ease-out')),
        transition('hide => show', animate('700ms ease-in'))
      ]
    ),
    trigger('foobar3', [
        state('show', style3),
        state('hide', style5),
        transition('show => hide', animate('1000ms ease-out')),
        transition('hide => show', animate('1000ms ease-in'))
      ]
    ),
    trigger('foobar4', [
        state('show', style1),
        state('hide', style6),
        transition('show => hide', animate('1000ms ease-out')),
        transition('hide => show', animate('1000ms ease-in'))
      ]
    )
  ]
})

export class TestimonialComponent {

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

  data: ClientsDeta[] = [{
    image: "./assets/testimonial-1.jpg",
    name: "Cristina Murillo",
    title: "Product Management in",
    company: " Envato LLC",
    comments: "“Drake was a real pleasure to work with and we look" +
      "forward to working with him again. He's definitely the kind of \n" +
      "designer that you can trust with any project from A-Z.”",
    project: "PROJECT",
    serial: "1"
  },{
    image: "./assets/testimonial-2.jpg",
    name: "Cristina Murillo",
    title: "Product Management in",
    company: "App Inc",
    comments: "“Extremely professional and fast service!. Drake is a master"+
    "of code and he also very creative. We done 3 projects with" +
    "him and certain will continue.”",
    project: "PROJECT",
    serial: "2"
  },{
    image: "./assets/testimonial-3.jpg",
    name: "Cristina Murillo",
    title: "Product Management in",
    company: "China Agency",
    comments: "“Drake - A Developer with the creativity, professional and"+
    "master of code. Much more than what i'm expect."
    +" High quality product & flexible price. Recommended!.”",
    project: "PROJECT",
    serial: "3"
  }];

  num = 1;
  left() {
    this.num = this.num-1;
    if (this.num < 1){
      this.num = 3;
    }
  }
  right() {
    this.num = this.num+1;
    if (this.num > 3){
      this.num = 1;
    }
  }

  image =[
    {
  url: "assets/img/client-1.png"
    },
    {
      url: "assets/img/client-2.png"
    },
    {
      url: "assets/img/client-3.png"
    },
    {
      url: "assets/img/client-4.png"
    },
    {
      url: "assets/img/client-5.png"
    },
    {
      url: "assets/img/client-6.png"
    },{
      url: "assets/img/client-7.png"
    },{
      url: "assets/img/client-8.png"
    }

  ]
}

