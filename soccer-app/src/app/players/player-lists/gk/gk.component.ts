import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-gk',
  templateUrl: './gk.component.html',
  styleUrls: ['./gk.component.css'],
})
export class GkComponent implements OnInit {
  @Input() gk: Player;
  
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSelected(){
    this.playerService.gkSelected.emit(this.gk);
  }

}
