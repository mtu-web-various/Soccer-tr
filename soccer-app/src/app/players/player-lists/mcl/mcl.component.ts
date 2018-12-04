import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';

@Component({
  selector: 'app-mcl',
  templateUrl: './mcl.component.html',
  styleUrls: ['./mcl.component.css']
})
export class MclComponent implements OnInit {
  @Input() mcl: Player; 

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSelected(){
    this.playerService.mclSelected.emit(this.mcl);
  }

}
