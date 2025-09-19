import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  scrollToContact() {
    const footer = document.getElementById('contact');
    footer?.scrollIntoView({ behavior: 'smooth' });
  }
}
