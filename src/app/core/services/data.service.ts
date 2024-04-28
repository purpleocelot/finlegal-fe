import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { AuthorityRating } from '../models/authority-rating';
import { Authority } from '../models/authority';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://localhost:44365/api/'; // This would live in the config or a env variable in a full SPA app

  constructor(private http: HttpClient) { }

  getAuthorities(): Observable<Authority[]> {
    const url = `${this.baseUrl}authorities`;
    return this.http.get<Authority[]>(url);
  }

  getAuthorityRatings(authorityId: number): Observable<AuthorityRating[]> {
    const url = `${this.baseUrl}authority/${authorityId}`;
    return this.http.get<AuthorityRating[]>(url);
  }
}
