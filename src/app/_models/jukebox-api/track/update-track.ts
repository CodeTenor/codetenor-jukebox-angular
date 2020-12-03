export class UpdateTrack {
  qr_code: string;
  track_id: number;

  constructor(qr_code: string, track_id: number) {
    this.qr_code = qr_code;
    this.track_id = track_id;
  }
}
