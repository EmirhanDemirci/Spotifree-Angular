import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/Artist';
import { RootArtist } from '../models/RootArtist';
import { ArtistService } from '../shared/artist.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css'],
})
export class ArtistPageComponent implements OnInit {
  Artist: Artist = new Artist();
  Data$: Artist[] = [];
  constructor(private artistService: ArtistService) {}

  ngOnInit() {
    this.artistService.getArtistsBasedOnIds().subscribe(
      (res: RootArtist) => {
        this.Data$ = res.artists;
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
