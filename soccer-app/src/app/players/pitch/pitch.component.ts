import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.css']
})
export class PitchComponent implements OnInit {
  @Input() gk: Player;
  @Input() dr: Player;
  @Input() dcr: Player;
  
  constructor() { }

  ngOnInit() {
    this.gk = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
    this.dr = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
    this.dcr = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
  }

}
