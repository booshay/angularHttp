import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IData} from './data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  //private _url: string = 'assets/data/data.json';
   private _url = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) { }

  getData(): Observable<IData[]> {
    return this.http.get<IData[]>(this._url);
  }
}
