import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private baseUrl = `${environment.api.url}/${environment.api.version}`;

  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  requestOptions = {
    mode: 'cors',
    method: 'GET',
    headers: new HttpHeaders(this.headerDict),
    redirect: 'follow',
  };
}
