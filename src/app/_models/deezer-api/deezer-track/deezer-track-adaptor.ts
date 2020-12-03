import { Injectable } from '@angular/core';
import { Adaptor } from '../../shared/adaptor';
import { DeezerTrack } from './deezer-track';
import { DeezerArtistAdaptor } from '../deezer-artist/deezer-artist-adaptor';

@Injectable()
export class DeezerTrackAdaptor implements Adaptor<DeezerTrack> {

  constructor(private deezerArtistAdaptor: DeezerArtistAdaptor) { }

  adapt(item: any): DeezerTrack {
    return new DeezerTrack(item.id, item.title_short, this.deezerArtistAdaptor.adapt(item.artist));
  }
}
