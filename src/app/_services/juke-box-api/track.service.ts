import { Injectable } from '@angular/core';
import { ApiBaseService } from '../shared/api-base.service';
import { QueryTrack } from 'src/app/_models/jukebox-api/track/query-track';
import { Track } from 'src/app/_models/jukebox-api/track/track';
import { Observable } from 'rxjs';
import { JukeboxApiConstants } from '../shared/jukebox-api-constants';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TrackAdaptor } from 'src/app/_models/jukebox-api/track/track-adaptor';
import { UpdateTrack } from 'src/app/_models/jukebox-api/track/update-track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  protected baseUri = environment.jukeboxApiUrl;

  constructor(private baseService: ApiBaseService,
              private jukeboxApiConstants: JukeboxApiConstants,
              private trackAdaptor: TrackAdaptor) { }

  public getTracks(queryModel: QueryTrack): Observable<Track[]> {

    const get_tracks = `${this.jukeboxApiConstants.get_tracks}?${QueryTrack.queryParams(queryModel)}`;

    return this.baseService.get(this.baseUri + get_tracks, true).pipe(
      map((data: any[]) => data.map(item => this.trackAdaptor.adapt(item))),
    );
  }

  public updateTrack(updateTrack: UpdateTrack): Observable<any> {

    const update_track = this.jukeboxApiConstants.update_track;

    return this.baseService.post(this.baseUri + update_track, updateTrack, true);
  }
}
