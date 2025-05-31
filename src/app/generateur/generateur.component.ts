import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'; // Firestore

@Component({
  selector: 'app-generateur',
  standalone: false,
  templateUrl: './generateur.component.html',
  styleUrls: ['./generateur.component.css']
})
export class GENERATEURComponent {
  // Départements et programmes par année et département
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
    "EIL": ["TC (Tronc Commun)", "GIM(Genie Informatique et Maïeutique)"]
  };

  // Variables de formulaire
  firstName = '';
  lastName = '';
  studentId = '';
  year = '';
  department = '';
  program = '';

  // Variables pour afficher les informations
  studentName = '';
  displayStudentId = '';
  displayDepartment = '';
  displayProgram = '';
  displayYear = '';

  // Variables de contrôle de l'affichage
  showStudentInfo = false;
  showQRCode = false;
  qrCodeData = '';
  isDepartmentDisabled = true;
  isProgramDisabled = true;
  isDownloadDisabled = true;
  isPrintDisabled = true;

  constructor(private firestore: Firestore) {}

  // Fonction de gestion du changement d'année
  onYearChange(): void {
    this.resetDepartmentAndProgram();
    this.isDepartmentDisabled = !this.year;
  }

  // Fonction de gestion du changement de département
  onDepartmentChange(): void {
    this.program = '';
    this.isProgramDisabled = !this.department;
  }

  // Fonction pour générer le QR Code
  async generateQRCode(): Promise<void> {
    if (!this.validForm()) {
      alert("Veuillez remplir les champs obligatoires (Prénom, Nom, Numéro étudiant)");
      return;
    }

    // Met à jour les informations à afficher
    this.updateDisplayInfo();

    // Génère les données pour le QR code
    this.generateQRData();
    this.enableFeatures();

    try {
      // Enregistrement des données dans Firestore
      const path = `departements/${this.department}/niveaux/${this.year}/filieres/${this.program}/etudiants`;
      const colRef = collection(this.firestore, path);
      await addDoc(colRef, {
        firstName: this.firstName,
        lastName: this.lastName,
        studentId: this.studentId,
        department: this.department,
        program: this.program,
        year: this.year,
        generatedAt: new Date().toISOString()
      });
      console.log('Données enregistrées avec succès');
    } catch (error) {
      console.error('Erreur Firestore :', error);
    }
  }

  // Fonction pour télécharger le QR Code
  downloadQRCode(): void {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `QR_${this.lastName || 'etudiant'}_${this.firstName || 'qr-code'}.png`;
    link.click();
  }

  // Fonction pour imprimer le QR Code
  printQRCode(): void {
    window.print();
  }

  // Fonction pour valider le formulaire
  private validForm(): boolean {
    return !!this.firstName && !!this.lastName && !!this.studentId;
  }

  // Réinitialisation des départements et filières
  private resetDepartmentAndProgram(): void {
    this.department = '';
    this.program = '';
    this.isProgramDisabled = true;
  }

  // Mise à jour des informations à afficher sur la carte
  private updateDisplayInfo(): void {
    this.studentName = `${this.firstName} ${this.lastName}`;
    this.displayStudentId = this.studentId;
    this.displayDepartment = this.department || 'Non spécifié';
    this.displayProgram = this.program || 'Non spécifié';
    this.displayYear = this.year || 'Non spécifié';
    this.showStudentInfo = true;
  }

  // Génération des données pour le QR Code
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

  // Activation des fonctionnalités après génération du QR Code
  private enableFeatures(): void {
    this.showQRCode = true;
    this.isDownloadDisabled = false;
    this.isPrintDisabled = false;
  }

  // Fonction d'aide avec instructions
  showHelp(): void {
    alert("Instructions :\n1. Remplissez les informations\n2. Générez le QR Code\n3. Téléchargez ou imprimez");
  }
}
