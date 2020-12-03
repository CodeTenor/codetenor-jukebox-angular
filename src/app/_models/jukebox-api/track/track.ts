export class Track  {
  track_id: number;
  title: string;
  artist: string;
  picture_big: string;
  played: boolean;

  constructor(track_id: number, title: string, artist: string, picture_big: string, played: boolean) {
    this.track_id = track_id;
    this.title = title;
    this.artist = artist;
    this.picture_big = picture_big;
    this.played = played;
  }
}
