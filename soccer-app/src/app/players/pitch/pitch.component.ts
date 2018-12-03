import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.css']
})
export class PitchComponent implements OnInit {
  @Input() gk: Player;
  
  constructor() { }

  ngOnInit() {
  }

}
