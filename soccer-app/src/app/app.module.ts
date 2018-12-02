import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlayersComponent } from './players/players.component';
import { PitchComponent } from './players/pitch/pitch.component';
import { PlayerListsComponent } from './players/player-lists/player-lists.component';
import { GkComponent } from './players/player-lists/gk/gk.component';
import { DrComponent } from './players/player-lists/dr/dr.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayersComponent,
    PitchComponent,
    PlayerListsComponent,
    GkComponent,
    DrComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
