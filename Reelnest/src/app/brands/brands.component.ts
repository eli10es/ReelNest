import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
})
export class BrandsComponent {
  isDesktop = window.innerWidth >= 1024;

  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth >= 1024;
  }

  brands: string[] = [
    'tutti.jpg',
    'leaderImpact.jpg',
    'baniiFamiliei.jpg',
    'depUtilaje.jpg',
    'aliniere.jpg',
    'inspirium.jpg',
    'baurent.jpg',
  ];
}
