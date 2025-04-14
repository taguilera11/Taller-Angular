import { Component, Input } from '@angular/core';
import { SerieListComponent } from '../serie-list/serie-list.component';
import { Serie } from '../Serie';

@Component({
  selector: 'app-serie-detail',
  standalone: false,
  templateUrl: './serie-detail.component.html',
  styleUrl: './serie-detail.component.css'
})
export class SerieDetailComponent {
  @Input() serie: Serie | null = null;
}
