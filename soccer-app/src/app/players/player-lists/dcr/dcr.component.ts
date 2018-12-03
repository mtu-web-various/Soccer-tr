import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-dcr',
  templateUrl: './dcr.component.html',
  styleUrls: ['./dcr.component.css']
})
export class DcrComponent implements OnInit {
  @Input() dcr: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSelected(){
    this.playerService.dcrSelected.emit(this.dcr);
  }

}
