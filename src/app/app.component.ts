import { Component } from '@angular/core';
import { Serie } from './series/Serie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Taller-Angular';
  selectedSerie: Serie | null = null;

  onSelectedSerie(serie: Serie) {
    this.selectedSerie = serie;
  }
}
