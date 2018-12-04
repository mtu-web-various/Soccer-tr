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
  @Input() dcl: Player;
  @Input() dl: Player;
  @Input() dmc: Player;
  @Input() mcr: Player;
  @Input() mcl: Player;
  @Input() fc: Player;
  @Input() fcr: Player;
  @Input() fcl: Player;
  
  constructor() { }

  ngOnInit() {
    this.gk = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
    this.dcr = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
    this.dcl = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
    this.dr = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
    this.dl = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
    this.dmc = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
    this.mcr = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
    this.mcl = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
    this.fc = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
    this.fcr = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
    this.fcl = new Player("?","https://image.freepik.com/free-icon/question-mark_318-139902.jpg");
  }

}
