import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ArtWorkComponent } from './artWork/artWork.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'art-galleries', component: GalleryComponent },
  { path: 'art-works/:galleryId', component: ArtWorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
