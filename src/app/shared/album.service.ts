import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { from, Observable } from 'rxjs';
import { Album } from '../models/Album';
import { RootObject } from '../models/RootObject';
@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  localURI =
    'http://localhost:9191/getAlbum/?ids=7fd7SEK25VS3gJAUgSwL6y,1zUY4PAFrNUOCeaEBrEHzh,6cyMDvoo7Vr3PYzvUhEgec';
  Album: Album = new Album();
  constructor(private _http: HttpClient) {}
  //Get the cryptos from api
  getAlbumBasedOnIds(): Observable<any> {
    let params = new HttpHeaders();
    // params = params.append('ids', '0sNOF9WDwhWunNAHPD3Baj');
    // console.log(params);
    var request = this._http.get<RootObject>(this.localURI);

    // request.forEach((element) => {
    //   console.log(element.albums);
    // });
    return request;
  }
}
