import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serie } from './Serie';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(this.apiUrl);
  }
}
