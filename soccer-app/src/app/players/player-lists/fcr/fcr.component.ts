import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-fcr',
  templateUrl: './fcr.component.html',
  styleUrls: ['./fcr.component.css']
})
export class FcrComponent implements OnInit {
  @Input() fcr: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSelected(){
    this.playerService.fcrSelected.emit(this.fcr);
  }

}
