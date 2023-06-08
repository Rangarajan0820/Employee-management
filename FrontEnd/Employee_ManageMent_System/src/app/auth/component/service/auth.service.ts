import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonDto } from '../view/view.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl: String = 'http://localhost:6060/';

  constructor(private http:HttpClient) { }

  save(input: any): Observable<any> {
    const headers = {
      'Content-type': 'application/json',
    };
    return this.http.post(`${this.baseurl}` + 'save', input, { headers });
  }
  get() {
    return this.http.get<CommonDto>(`${this.baseurl}` + 'getAllData');
  }
  update(input: any): Observable<any> {
    const headers = {
      'Content-type': 'application/json',
    };
    return this.http.post<CommonDto>(`${this.baseurl}` + 'update', input, {
      headers,
    });
  }

  deletedata(input: any): Observable<any> {
    const headers = {
      'Content-type': 'application/json',
    };
    return this.http.post<CommonDto>(`${this.baseurl}` + 'delete', input, {
      headers,
    });
  }
  login(input: any): Observable<any> {
    const headers = { 'Content-type': 'application/json' };
    return this.http.post(`${this.baseurl}` + 'login', input, { headers });
  }
  sample(input: any): Observable<any> {
    const headers = { 'Content-type': 'application/json' };
    return this.http.post(`${this.baseurl}` + 'sample', input, { headers });
  }
  getDataByName(name: any): Observable<any> {
    const headers = { 'Content-type': 'application/json' };
    return this.http.post(
      `${this.baseurl}` + 'findByName?empName=' + name,
      {},
      {
        headers,
      }
    );
}
}