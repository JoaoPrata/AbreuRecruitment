import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'
import { GalleryService } from '../gallery/gallery.service';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrl: './gallery-modal.component.css'
})
export class GalleryModalComponent {


  constructor(private modal: MatDialogRef<GalleryModalComponent>, private formBuilder: FormBuilder, private galleryService: GalleryService ) {

  }

  closeModal() {
    this.modal.close()
  }

  galleryForm = this.formBuilder.group({
    name: this.formBuilder.control(''),
    city: this.formBuilder.control(''),
    manager: this.formBuilder.control('')
  });

  saveGallery() {
    console.log(this.galleryForm.value)
    this.galleryService.saveGallery(this.galleryForm.value).subscribe(result => {
      this.closeModal();
    });
  }

}
