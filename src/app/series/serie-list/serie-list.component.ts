import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../Serie';
import { SerieDetailComponent } from '../serie-detail/serie-detail.component';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css'
})
export class SerieListComponent implements OnInit{

  series: Serie[] = [];
  averageSeasons: number = 0;
  @Output() selectedSerie = new EventEmitter<Serie>();

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
      this.serieService.getSeries().subscribe(data => {
        this.series = data;
        this.averageSeasons = this.calculateAverage();
      });
  }

  calculateAverage(): number {
    let average: number = 0;
    this.series.forEach((serie)=> {
      average += serie.seasons;
    });
    return average/this.series.length
  }
  
  selectSerie(serie: Serie): void{
    this.selectedSerie.emit(serie);
  }

}
