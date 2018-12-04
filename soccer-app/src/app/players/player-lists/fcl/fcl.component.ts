import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-fcl',
  templateUrl: './fcl.component.html',
  styleUrls: ['./fcl.component.css']
})
export class FclComponent implements OnInit {
  @Input() fcl: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSelected(){
    this.playerService.fclSelected.emit(this.fcl);
  }

}
