import { Component, OnInit } from '@angular/core';
import { ArtWork } from './models';
import { ArtWorkService } from './artWork.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-artWork',
  templateUrl: './artWork.component.html',
  styleUrl: './artWork.component.css'
})

export class ArtWorkComponent implements OnInit {
  artWorks: ArtWork[] = [];
  displayedColumns: string[] = ['name', 'author', 'creationYear', 'askPrice'];
  galleryId: string

  constructor(private route: ActivatedRoute, private artWorkService: ArtWorkService)
  {
    this.galleryId = this.route.snapshot.paramMap.get("galleryId") ?? ""
  }

  ngOnInit(): void {
    console.log(this.galleryId);
    this.artWorkService.getGalleryArtWorks(this.galleryId).subscribe(artWorks => { this.artWorks = artWorks; console.log(this.artWorks);});
  }
}
