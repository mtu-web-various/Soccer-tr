import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-lists',
  templateUrl: './player-lists.component.html',
  styleUrls: ['./player-lists.component.css']
})
export class PlayerListsComponent implements OnInit {

  gks : Player[];

  constructor(private playerService: PlayerService) { 

  }

  ngOnInit() {
    this.gks = this.playerService.getRecipes();
  }

}
