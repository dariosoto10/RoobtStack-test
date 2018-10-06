import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
  this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 400,
        preview: false
      },
// tslint:disable-next-line:max-line-length
    { 'image': false, 'height': '100px', 'arrowPrevIcon': 'fa fa-angle-left', 'arrowNextIcon': 'fa fa-angle-right', 'imageAutoPlay': true,  'preview': false },
    { 'breakpoint': 500, 'width': '100%' }
  ];

    this.galleryImages = [
    {
      small: './assets/tile.png',
      medium: './assets/tile.png',
      big: './assets/tile.png'
    },
    {
      small: './assets/tile-1.png',
      medium: './assets/tile-1.png',
      big: './assets/tile-1.png'
    },
    {
      small: './assets/overlay.png',
      medium: './assets/overlay.png',
      big: './assets/overlay.png'
    },
    {
      small: './assets/tile-3.png',
      medium: './assets/tile-3.png',
      big: './assets/tile-3.png'
    },
    {
    small: './assets/tile-4.png',
    medium: './assets/tile-4.png',
big: './assets/tile-4.png'
    },
    {
      small: './assets/tile.png',
      medium: './assets/tile.png',
      big: './assets/tile.png'
    }
  ];
  }

}
