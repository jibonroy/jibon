import { Component } from '@angular/core';
import {Menu} from "../interfaces/menu";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
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
    }];

}
