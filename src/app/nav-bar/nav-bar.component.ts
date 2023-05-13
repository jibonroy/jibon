import { Component } from '@angular/core';
import {Menu} from "../interfaces/menu";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  menus:Menu[] = [
    {
      title: "Home",
      icon: "las la-home",
      link: "#home"
    },
    {
      title: "About",
      icon: "lar la-user",
      link: "#about"
    },
    {
      title: "Resume",
      icon: "las la-briefcase",
      link: "#resume"
    },
    {
      title: "Services",
      icon: "las la-stream",
      link: "#services"
    },
    {
      title: "Skills",
      icon: "las la-shapes",
      link: "#skills"
    },
    {
      title: "Portfolio",
      icon: "las la-grip-vertical",
      link: "#portfolio"
    },
    {
      title: "Testimonial",
      icon: "lar la-comment",
      link: "#testimonial"
    },
    {
      title: "Contact",
      icon: "las la-envelope",
      link: "#contact"
    }
  ]
}
