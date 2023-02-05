import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INSTRUMENTS_URL } from '../shared/constants/urls';
import { Instrument } from '../shared/models/Instrument';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Instrument[]> {
    return this.http.get<Instrument[]>(INSTRUMENTS_URL);
  }

}