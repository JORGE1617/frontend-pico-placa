import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicoPlacaService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  consultarPicoPlaca(plateNumber: string, dateTime: string): Observable<any> {
    const url = `${this.baseUrl}/checkPicoPlaca?plateNumber=${plateNumber}&dateTime=${dateTime}`;
    return this.http.get(url, { responseType: 'text' });
  }
}
