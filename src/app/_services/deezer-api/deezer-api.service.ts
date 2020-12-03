import { Injectable } from '@angular/core';
import { ApiBaseService } from '../shared/api-base.service';
import { environment } from 'src/environments/environment';
import { DeezerApiConstants } from '../shared/deezer-api-constants';
import { DeezerTrackAdaptor } from 'src/app/_models/deezer-api/deezer-track/deezer-track-adaptor';
import { map } from 'rxjs/operators';
import { DeezerTrack } from 'src/app/_models/deezer-api/deezer-track/deezer-track';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {

  protected baseUri = environment.deezerApiUrl;

  constructor(private baseService: ApiBaseService,
              private deezerApiConstants: DeezerApiConstants,
              private deezerTrackAdaptor: DeezerTrackAdaptor) { }

  public getDeezerTrack(track_id: number): Observable<DeezerTrack> {

    const get_track = `${this.deezerApiConstants.get_track}${track_id}`;

    return this.baseService.get(this.baseUri + get_track, false).pipe(
      map((data: any) => this.deezerTrackAdaptor.adapt(data)),
    );
  }
}
