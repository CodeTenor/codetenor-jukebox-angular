import { Injectable } from '@angular/core';
import { Track } from './track';
import { Adaptor } from '../../shared/adaptor';

@Injectable()
export class TrackAdaptor implements Adaptor<Track> {
  adapt(item: any): Track {
    return new Track(item.track_id, item.title, item.artist, item.picture_big, item.played);
  }
}
