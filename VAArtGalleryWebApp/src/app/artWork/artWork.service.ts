import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArtWork } from './models';

@Injectable({
  providedIn: 'root'
})
export class ArtWorkService {
  private baseUrl = 'https://localhost:7042/api/art-galleries/art-works/'
  constructor(private http: HttpClient) { }


  getGalleryArtWorks(galleryid: string): Observable<ArtWork[]> {
    return this.http.get<ArtWork[]>(`${this.baseUrl}${galleryid}`)
  }
}
