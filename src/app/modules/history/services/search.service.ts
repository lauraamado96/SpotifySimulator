import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgModel } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = environment.api

  constructor(private httpClient: HttpClient) { }

  searchTracks$(term: string): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks?src=${term}`)
      .pipe(
        map((dataRaw: any) => dataRaw.data)
      )
  }

}
