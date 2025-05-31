import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Pour ngModel


@Component({
  selector: 'app-connexion',
  standalone: false,
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef<HTMLInputElement>;
  @ViewChild('btnText') btnText!: ElementRef<HTMLElement>;
  @ViewChild('btnSpinner') btnSpinner!: ElementRef<HTMLElement>;
  @ViewChild('loginBtn') loginBtn!: ElementRef<HTMLButtonElement>;

  username: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(private router: Router) {}

  togglePasswordVisibility(event: Event): void {
    event.preventDefault();
    const input = this.passwordInput.nativeElement;
    const icon = (event.currentTarget as HTMLElement).querySelector('i');
    
    if (input && icon) {
      input.type = input.type === 'password' ? 'text' : 'password';
      icon.classList.toggle('fa-eye');
      icon.classList.toggle('fa-eye-slash');
    }
  }

  onSubmit(): void {
    this.isLoading = true;
    
    // Simulation de vérification
    setTimeout(() => {
      if (this.username && this.password) {
        this.router.navigate(['/scanner']);
      } else {
        alert('Veuillez remplir tous les champs');
      }
      this.isLoading = false;
    }, 1500);
  }
}
