import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-generateur',
  standalone: true,
  imports: [CommonModule, FormsModule, QRCodeComponent],
  templateUrl: './generateur.component.html',
  styleUrls: ['./generateur.component.css']
})
export class GENERATEURComponent {
  // Départements et filières
  departmentsByYear: { [key: string]: string[] } = {
    "L1": ["EMG-BS", "ESL", "IEJSP", "IPMAC", "IASAG", "EIL"],
    "L2": ["EMG-BS", "ESL", "IEJSP", "IPMAC", "IASAG", "EIL"],
    
  };

  programsByDepartment: { [key: string]: string[] } = {
    "EMG-BS": ["Economie", "Gestion", "Commerce International", "Finance", "Marketing"],
    "ESL": ["Médecine Générale", "Chirurgie", "Pédiatrie", "Pharmacie", "Biologie Médicale"],
    "IEJSP": ["Droit Public", "Droit Privé", "Droit International", "Droit des Affaires"],
    "IPMAC": ["Lettres Modernes", "Littérature", "Philosophie", "Histoire", "Langues Étrangères"],
    "IASAG": ["Agrobusiness", "Phytotechnie", "Sécurité alimentaire", "EZootechnie"],
    "EIL": ["Génie Civil", "Génie Mécanique", "Génie Électrique", "Génie Informatique", "Aérospatial"]
  };

  // Données du formulaire
  firstName = '';
  lastName = '';
  studentId = '';
  year = '';
  department = '';
  program = '';

  // Affichage
  studentName = '';
  displayStudentId = '';
  displayDepartment = '';
  displayProgram = '';
  displayYear = '';
  
  // États
  showStudentInfo = false;
  showQRCode = false;
  qrCodeData = '';
  isDepartmentDisabled = true;
  isProgramDisabled = true;
  isDownloadDisabled = true;
  isPrintDisabled = true;

  // Gestion des changements
  onYearChange(): void {
    this.resetDepartmentAndProgram();
    this.isDepartmentDisabled = !this.year;
    if (this.year) this.isDepartmentDisabled = false;
  }

  onDepartmentChange(): void {
    this.program = '';
    this.isProgramDisabled = !this.department;
    if (this.department) this.isProgramDisabled = false;
  }

  // Génération QR Code
  generateQRCode(): void {
    if (!this.validForm()) {
      alert("Veuillez remplir les champs obligatoires (Prénom, Nom, Numéro étudiant)");
      return;
    }

    this.updateDisplayInfo();
    this.generateQRData();
    this.enableFeatures();
  }

  // Téléchargement/Impression
  downloadQRCode(): void {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;
    
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `QR_${this.lastName || 'etudiant'}_${this.firstName || 'qr-code'}.png`;
    link.click();
  }

  printQRCode(): void {
    window.print();
  }

  // Méthodes utilitaires
  private validForm(): boolean {
    return !!this.firstName && !!this.lastName && !!this.studentId;
  }

  private resetDepartmentAndProgram(): void {
    this.department = '';
    this.program = '';
    this.isProgramDisabled = true;
  }

  private updateDisplayInfo(): void {
    this.studentName = `${this.firstName} ${this.lastName}`;
    this.displayStudentId = this.studentId;
    this.displayDepartment = this.department || 'Non spécifié';
    this.displayProgram = this.program || 'Non spécifié';
    this.displayYear = this.year || 'Non spécifié';
    this.showStudentInfo = true;
  }

  private generateQRData(): void {
    this.qrCodeData = JSON.stringify({
      firstName: this.firstName,
      lastName: this.lastName,
      studentId: this.studentId,
      department: this.department,
      program: this.program,
      year: this.year,
      generatedAt: new Date().toISOString()
    });
  }

  private enableFeatures(): void {
    this.showQRCode = true;
    this.isDownloadDisabled = false;
    this.isPrintDisabled = false;
  }

  showHelp(): void {
    alert("Instructions:\n1. Remplissez les informations\n2. Générez le QR Code\n3. Téléchargez ou imprimez");
  }
}