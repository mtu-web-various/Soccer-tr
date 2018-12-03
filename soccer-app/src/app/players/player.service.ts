import { Player } from './player.model';
import { EventEmitter } from '@angular/core';

export class PlayerService{
    gkSelected = new EventEmitter<Player>();
    drSelected = new EventEmitter<Player>();
    dcrSelected = new EventEmitter<Player>();
    dclSelected = new EventEmitter<Player>();
    dlSelected = new EventEmitter<Player>();

    private gks : Player[] = [
        new Player("Muslera", "https://futhead.cursecdn.com/static/img/14/players/wc/182494.png"),
        new Player("Karius", "https://fifaaddict.com/fo3img/players/p203775.png?2018")
    ];

    private drs : Player[] = [
        new Player("Mariano", "https://www.pesmaster.com/pes-2018/graphics/players/player_43746.png"),
        new Player("Gokhan", "http://i54.tinypic.com/2ebtu86.png")    
    ]

    private dcrs : Player[] = [
        new Player("Skrtel", "https://www.pesmaster.com/pes-2018/graphics/players/player_32828.png"),
        new Player("Pepe", "https://fifaaddict.com/fo3img/players/p9120533.png?2018") 
    ]

    getGk(){
        return this.gks.slice();
    }

    getDr(){
        return this.drs.slice();
    }

    getDcr(){
        return this.dcrs.slice();
    }

    
}