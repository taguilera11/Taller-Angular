import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie.model';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css'
})
export class SerieListComponent implements OnInit{

  series: Serie[] = [];

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
      this.serieService.getSeries().subscribe(data => {
        this.series =data;
      });
  }

}
