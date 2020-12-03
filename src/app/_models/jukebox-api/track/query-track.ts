import { Track } from './track';
import { Query } from '../query';

export class QueryTrack extends Query {
  public tracks: Track[];

  public qr_code?: string;
  public latest_sync?: number;

  constructor(model?: any) {
    super(model);
    this.tracks = new Array<Track>();
  }

  public static queryParams(model: QueryTrack): string {
    return super.queryParams(model) +
    `${(model.qr_code ? ('qr_code=' + model.qr_code) : '')}` +
    `${(model.latest_sync ? ('&latest_sync=' + model.latest_sync) : '')}` +
    ``.trim();
  }
}
