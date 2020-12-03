import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiBaseService } from './_services/shared/api-base.service';
import { JukeboxApiConstants } from './_services/shared/jukebox-api-constants';
import { UserAdaptor } from './_models/jukebox-api/user/user-adaptor';
import { TrackAdaptor } from './_models/jukebox-api/track/track-adaptor';
import { TrackService } from './_services/juke-box-api/track.service';
import { IdentityService } from './_services/juke-box-api/identity.service';
import { DeezerTrackAdaptor } from './_models/deezer-api/deezer-track/deezer-track-adaptor';
import { DeezerArtistAdaptor } from './_models/deezer-api/deezer-artist/deezer-artist-adaptor';
import { DeezerApiService } from './_services/deezer-api/deezer-api.service';
import { DeezerApiConstants } from './_services/shared/deezer-api-constants';
import { SafePipe } from './_services/shared/pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ApiBaseService,
    JukeboxApiConstants,
    DeezerApiConstants,
    UserAdaptor,
    TrackAdaptor,
    DeezerTrackAdaptor,
    DeezerArtistAdaptor,
    TrackService,
    DeezerApiService,
    IdentityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
