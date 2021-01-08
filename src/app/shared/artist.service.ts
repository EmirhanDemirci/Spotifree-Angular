import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { from, Observable } from 'rxjs';
import { Album } from '../models/Album';
import { RootObject } from '../models/RootObject';
import { RootArtist } from '../models/RootArtist';
import { Artist } from '../models/Artist';
@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  localURI =
    'http://localhost:9191/getArtist?ids=0OdUWJ0sBjDrqHygGUXeCF,66CXWjxzNUsdJxJ2JdwvnR,3TVXtAsR1Inumwj472S9r4';
  Artist: Artist = new Artist();
  constructor(private _http: HttpClient) {}
  //Get the cryptos from api
  getArtistsBasedOnIds(): Observable<any> {
    let params = new HttpHeaders();
    // params = params.append('ids', '0sNOF9WDwhWunNAHPD3Baj');
    // console.log(params);
    var request = this._http.get<RootArtist>(this.localURI);

    // request.forEach((element) => {
    //   console.log(element.albums);
    // });
    return request;
  }
}
