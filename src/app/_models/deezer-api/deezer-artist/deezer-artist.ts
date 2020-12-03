export class DeezerArtist {
  id: number;
  name: string;
  picture_big: string;

  constructor(id: number, name: string, picture_big: string) {
    this.id = id;
    this.name = name;
    this.picture_big = picture_big;
  }
}
