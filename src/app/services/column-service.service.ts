import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Column } from '../models/column.model';

@Injectable({
  providedIn: 'root'
})
export class ColumnServiceService {
  private readonly baseUrl =environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getColumns(): Observable<Column[]>{
    return this.http.get<Column[]>(`${this.baseUrl}/column/all`)
    
  }
}
