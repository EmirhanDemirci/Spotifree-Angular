import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Album } from '../models/Album';
import { RootObject } from '../models/RootObject';
import { AlbumService } from '../shared/album.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  Album: Album = new Album();
  Data$: Album[] = [];

  constructor(private albumService: AlbumService) {}
  ngOnInit() {
    this.albumService.getAlbumBasedOnIds().subscribe(
      (res: RootObject) => {
        this.Data$ = res.albums;
        console.log('gelukt:' + this.Data$);
        this.Data$.forEach((element) => {
          console.log(element);
        });
      },
      (err) => {
        console.log('mislukt:' + err);
      }
    );
  }
}
