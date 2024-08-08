import { Component, OnInit } from '@angular/core';
import { Gallery } from './models';
import { GalleryService } from './gallery.service';

import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})

export class GalleryComponent implements OnInit {
  galleries: Gallery[] = [];
  displayedColumns: string[] = ['name', 'city', 'manager', 'nbrWorks', 'actions'];

  constructor(private router: Router, private galleryService: GalleryService, private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('cenas');
    this.loadGalleries();
  }

  loadGalleries() {
    this.galleryService.getGalleries().subscribe(galleries => { this.galleries = galleries; console.log(this.galleries); });
  }

  editGalleryClick(galleryId: string) {
    console.log(galleryId);
  }

  openArtWorksList(galleryId: string) {
    console.log(galleryId);
    this.router.navigate(['art-works', galleryId]);
  }

  openModal() {
    var modal = this.dialog.open(GalleryModalComponent, {
      width: '60%'
    })

    modal.afterClosed().subscribe(result => {
      this.loadGalleries();
    });
  }
}
