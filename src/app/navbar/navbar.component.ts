import { NgClass } from '@angular/common';
import { Component, Host, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  showit = false;
  mostrar = false;

  mobileMenu() {
    this.mostrar = !this.mostrar;
  }

  Dropdown() {
    const arrow = document.getElementById('arrow');
    this.showit = !this.showit;
    if (arrow) {
      if (this.showit === true) {
        arrow.style.transform = 'rotate(90deg)';
      } else {
        arrow.style.transform = 'rotate(0deg)';
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(e: Event) {
    const click = e.target as HTMLElement;
    const drop = document.querySelector('.drop') as HTMLElement;
    const nav = document.querySelector('nav') as HTMLElement;

    if (drop && drop.classList.contains('show') && !drop.contains(click)) {
      this.showit = false;
      const arrow = document.getElementById('arrow');

      if (arrow) {
        if (this.showit) {
          arrow.style.transform = 'rotate(90deg)';
        } else {
          arrow.style.transform = 'rotate(0deg)';
        }
      }
    }

    if (nav && nav.classList.contains('navbar') && !nav.contains(click)) {
      this.mostrar = false;
      nav.classList.remove('show');
    }
  }
}
