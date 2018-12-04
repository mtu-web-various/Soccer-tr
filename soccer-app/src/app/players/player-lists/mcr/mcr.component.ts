import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-mcr',
  templateUrl: './mcr.component.html',
  styleUrls: ['./mcr.component.css']
})
export class McrComponent implements OnInit {
  @Input() mcr: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSelected(){
    this.playerService.mcrSelected.emit(this.mcr);
  }

}
