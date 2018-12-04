import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlayersComponent } from './players/players.component';
import { PitchComponent } from './players/pitch/pitch.component';
import { PlayerListsComponent } from './players/player-lists/player-lists.component';
import { GkComponent } from './players/player-lists/gk/gk.component';
import { DrComponent } from './players/player-lists/dr/dr.component';
import { DcrComponent } from './players/player-lists/dcr/dcr.component';
import { DclComponent } from './players/player-lists/dcl/dcl.component';
import { DlComponent } from './players/player-lists/dl/dl.component';
import { DmcComponent } from './players/player-lists/dmc/dmc.component';
import { McrComponent } from './players/player-lists/mcr/mcr.component';
import { MclComponent } from './players/player-lists/mcl/mcl.component';
import { FcrComponent } from './players/player-lists/fcr/fcr.component';
import { FclComponent } from './players/player-lists/fcl/fcl.component';
import { FcComponent } from './players/player-lists/fc/fc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayersComponent,
    PitchComponent,
    PlayerListsComponent,
    GkComponent,
    DrComponent,
    DcrComponent,
    DclComponent,
    DlComponent,
    DmcComponent,
    McrComponent,
    MclComponent,
    FcrComponent,
    FclComponent,
    FcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
