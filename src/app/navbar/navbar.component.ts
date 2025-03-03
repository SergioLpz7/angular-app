import { NgClass } from '@angular/common';
import { Component, Host, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showit = false;
  mostrar = false;
  opacidad: HTMLElement | null = null;

  mobileMenu() {
    this.mostrar = !this.mostrar;

    if (this.mostrar === true) {
      this.opacidad = document.createElement('div');
      // document.body.style.opacity = '0.5';
      this.opacidad.style.position = 'absolute';
      this.opacidad.style.top = '0';
      this.opacidad.style.width = '100%';
      this.opacidad.style.height = '100vh';
      this.opacidad.style.opacity = '0.5';
      this.opacidad.style.zIndex = 'z-index: 9';
      this.opacidad.style.backgroundColor = 'black';
      document.body.appendChild(this.opacidad);
    } else {
      if (this.opacidad) {
        this.opacidad.remove();
        this.opacidad = null;
      }
    }
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

  resetDropdown() {
    const arrow = document.getElementById('arrow');
    this.showit = false;
    this.mostrar = false;
    if (arrow) {
      arrow.style.transform = 'rotate(0deg)';
    }
    if (this.opacidad) {
      this.opacidad.remove();
      this.opacidad = null;
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
        arrow.style.transform = 'rotate(0deg)';
      }
    }

    if (nav && nav.classList.contains('navbar') && !nav.contains(click)) {
      this.mostrar = false;
      if (this.opacidad) {
        this.opacidad.remove();
        this.opacidad = null;
      }
      // nav.classList.remove('show');
    }
  }
}
