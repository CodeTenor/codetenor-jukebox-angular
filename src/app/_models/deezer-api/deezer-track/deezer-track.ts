import { DeezerArtist } from '../deezer-artist/deezer-artist';

export class DeezerTrack {
  id: number;
  title: string;
  artist: DeezerArtist;

  constructor(id: number, title: string, artist: DeezerArtist) {
    this.id = id;
    this.title = title;
    this.artist = artist;
  }
}
