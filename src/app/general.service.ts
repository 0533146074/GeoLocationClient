import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  readonly routeUrl: string;

  constructor(private http: HttpClient) {
    this.routeUrl = 'http://localhost:3000'
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<any>(`${this.routeUrl}/${url}`)
  }

  post(url: string, payload: Object) {
    return this.http.post(`${this.routeUrl}/${url}`, payload)
  }

  patch(url: string, payload: Object) {
    return this.http.post(`${this.routeUrl}/${url}`, payload)
  }

  delete(url: string) {
    return this.http.get(`${this.routeUrl}/${url}`)
  }
}
