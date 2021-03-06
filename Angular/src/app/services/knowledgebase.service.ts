import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Knowledgebase } from '../models/knowledgebase';
import { AppSettings } from '../globals';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

@Injectable()
export class KnowledgebaseService {

  constructor(private http: Http) { }
  public headers = new Headers({ 'Content-Type': 'application/json' });
  
  getKnowledgeBase(): Observable<Knowledgebase[]> {
    return this.http.get(environment.API_ENDPOINT + '/kb/items', { headers: this.headers })
      .map(response => response.json().items);
  }
}