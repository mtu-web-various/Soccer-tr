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
  selectedDr: Player;
  selectedDcr: Player;
  selectedDcl: Player;
  selectedDl: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.gkSelected.subscribe(
      (gk: Player) => {
        this.selectedGk = gk;
      }
    );

    this.playerService.drSelected.subscribe(
      (dr: Player) => {
        this.selectedDr = dr;
      }
    );

    this.playerService.dcrSelected.subscribe(
      (dcr: Player) => {
        this.selectedDcr = dcr;
      }
    );

    this.playerService.dclSelected.subscribe(
      (dcl: Player) => {
        this.selectedDcl = dcl;
      }
    );

    this.playerService.dlSelected.subscribe(
      (dl: Player) => {
        this.selectedDl = dl;
      }
    );

  }

}
