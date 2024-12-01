import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Mouse {
  activated: boolean;
  interval: number;
  count: number;
  delay: number;
}

export interface Move {
  active: boolean;
  interval: number;
}

export interface RequestModel {
  activated: boolean;
  title: string;
  mode: string;
  interval: number;
  count: number;
  mouse: Mouse;
  move: Move;
}

@Injectable({
  providedIn: 'root',
})
export class AutoclickService {
  private readonly _http = inject(HttpClient);

  startAutoclick(requestBody: RequestModel): Observable<any> {
    return this._http.post('http://localhost:8080/api/autoclick/start', requestBody);
  }
}
