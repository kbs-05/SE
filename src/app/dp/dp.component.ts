import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dp',
  standalone: false,
  templateUrl: './dp.component.html',
  styleUrl: './dp.component.css'
})
export class DPComponent {
  // Propriétés pour le menu et l'état de la page
  isScrolled: boolean = false;
  isMenuOpen: boolean = false;

   // Gestion du scroll
   @HostListener('window:scroll')
   onWindowScroll(): void {
     this.isScrolled = window.scrollY > 50;
   }
 
   // Bascule le menu
   toggleMenu(): void {
     this.isMenuOpen = !this.isMenuOpen;
   }
 
   // Ferme le menu quand on clique à l'extérieur
   @HostListener('document:click', ['$event'])
   closeMenuOnClickOutside(event: Event): void {
     const target = event.target as HTMLElement;
     if (!target.closest('.navbar') && this.isMenuOpen) {
       this.isMenuOpen = false;
     }
   }
 
   // Ferme le menu
   closeMenu(): void {
     this.isMenuOpen = false;
   }

}
