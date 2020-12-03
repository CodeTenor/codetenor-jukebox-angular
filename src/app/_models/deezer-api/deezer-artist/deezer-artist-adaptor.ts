import { Injectable } from '@angular/core';
import { Adaptor } from '../../shared/adaptor';
import { DeezerArtist } from './deezer-artist';

@Injectable()
export class DeezerArtistAdaptor implements Adaptor<DeezerArtist> {
  adapt(item: any): DeezerArtist {
    return new DeezerArtist(item.id, item.name, item.picture_big);
  }
}
