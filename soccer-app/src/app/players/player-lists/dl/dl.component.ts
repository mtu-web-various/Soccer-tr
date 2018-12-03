import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-dl',
  templateUrl: './dl.component.html',
  styleUrls: ['./dl.component.css']
})
export class DlComponent implements OnInit {
  @Input() dl: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSelected(){
    this.playerService.dlSelected.emit(this.dl);
  }

}
