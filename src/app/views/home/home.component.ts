import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/_services/juke-box-api/track.service';
import { Track } from 'src/app/_models/jukebox-api/track/track';
import { QueryTrack } from 'src/app/_models/jukebox-api/track/query-track';
import { UpdateTrack } from 'src/app/_models/jukebox-api/track/update-track';
import { IdentityService } from 'src/app/_services/juke-box-api/identity.service';
import { DeezerTrack } from 'src/app/_models/deezer-api/deezer-track/deezer-track';
import { DeezerApiService } from 'src/app/_services/deezer-api/deezer-api.service';
import { DeezerArtist } from 'src/app/_models/deezer-api/deezer-artist/deezer-artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Track
  tracks: Track[] = [];
  currentTrack: number;
  track: Track;

  queryTrack = new QueryTrack();

  constructor(private trackService: TrackService,
              private deezerApiService: DeezerApiService,
              private identityService: IdentityService) { }

  ngOnInit() {
    setInterval(() => {
      this.refreshUpcomingList();
    }, 15000);
  }

  refreshUpcomingList() {
    this.queryTrack.qr_code = 'sean';
    this.trackService.getTracks(this.queryTrack).subscribe(
      result => {
        if (this.tracks.length === 0) {
          this.tracks = result;
        } else {
          this.tracks = result;
          // result.forEach(element => {
          //   if (this.tracks.find(x => x.track_id !== element.track_id)) {
          //     this.tracks.push(element);
          //   }
          // });
        }
        var randomnum = Math.floor(Math.random() * this.tracks.length) + 1;
        this.currentTrack = this.tracks[randomnum].track_id;
        this.getDeezerTrackInfo();
      }
    );
  }

  played(track: Track) {
    this.trackService.updateTrack(new UpdateTrack(this.identityService.getCurrentUser().qr_code, track.track_id))
      .subscribe(
        result => {
          console.log(result);
        }
      );
  }

  getDeezerTrackInfo() {
    this.track = this.tracks.find(x => x.track_id === this.currentTrack);
  }

  getPreviewUrl() {
    return `https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=false&width=700&
            height=350&color=FFCC99&layout=dark&size=medium&type=tracks&id=${this.currentTrack}&app_id=1`;
  }

}
