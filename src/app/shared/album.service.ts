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
  localURI = 'http://localhost:9191/getAlbum/?ids=0sNOF9WDwhWunNAHPD3Baj';

  constructor(private _http: HttpClient) {}
  //Get the cryptos from api
  getAlbumBasedOnIds(): Observable<any> {
    let params = new HttpHeaders();
    // params = params.append('ids', '0sNOF9WDwhWunNAHPD3Baj');
    // console.log(params);
    var request = this._http.get<any>(this.localURI);

    request.forEach((element) => {
      console.log(element.albums[0]);
    });
    return request;
  }
}
