import { Component, OnInit } from '@angular/core';
import { Player } from './player.model';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayerService]
})
export class PlayersComponent implements OnInit {
  selectedGk: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.gkSelected.subscribe(
      (gk: Player) => {
        this.selectedGk = gk;
      }
    );
  }

}
