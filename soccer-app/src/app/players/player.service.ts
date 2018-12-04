import { Player } from './player.model';
import { EventEmitter } from '@angular/core';

export class PlayerService{
    gkSelected = new EventEmitter<Player>();
    drSelected = new EventEmitter<Player>();
    dcrSelected = new EventEmitter<Player>();
    dclSelected = new EventEmitter<Player>();
    dlSelected = new EventEmitter<Player>();
    dmcSelected = new EventEmitter<Player>();
    mcrSelected = new EventEmitter<Player>();
    mclSelected = new EventEmitter<Player>();
    fclSelected = new EventEmitter<Player>();
    fcrSelected = new EventEmitter<Player>();
    fcSelected = new EventEmitter<Player>();

    private gks : Player[] = [
        new Player("Muslera", "https://futhead.cursecdn.com/static/img/14/players/wc/182494.png"),
        new Player("Karius", "https://fifaaddict.com/fo3img/players/p203775.png?2018"),
        new Player("Mert", "http://balkanpes.com/wp-content/uploads/2018/03/Mert-Gunok-128x128.png")
    ];

    private drs : Player[] = [
        new Player("Mariano", "https://www.pesmaster.com/pes-2018/graphics/players/player_43746.png"),
        new Player("Gokhan", "http://i54.tinypic.com/2ebtu86.png"),    
        new Player("Caner", "https://www.pesmaster.com/pes-2019/graphics/players/player_36246.png"), 
        new Player("Nagatomo", "https://futhead.cursecdn.com/static/img/14/players/wc/194359.png"),
        new Player("Adriano", "http://pesdb.net/pes2019/images/players/30238.png")     
    ]

    private dcrs : Player[] = [
        new Player("Skrtel", "https://www.pesmaster.com/pes-2018/graphics/players/player_32828.png"),
        new Player("Pepe", "https://fifaaddict.com/fo3img/players/p9120533.png?2018"),
        new Player("Serdar", "https://www.pesmaster.com/pes-2018/graphics/players/player_42072.png"),
        new Player("Medel", "https://futhead.cursecdn.com/static/img/14/players/wc/193532.png"),
        new Player("Epureanu", "https://cdn.sofifa.org/1x/16/players/182133.png")  
    ]

    private mcs : Player[] = [
        new Player("Ndiaye", "https://www.pesmaster.com/pes-2018/graphics/players/player_112052.png"),
        new Player("Emre", "https://www.pesmaster.com/pes-2019/graphics/players/player_1352.png"),
        new Player("Oguzhan", "https://www.pesmaster.com/pes-2019/graphics/players/player_44687.png"),  
        new Player("Fernando", "https://vignette.wikia.nocookie.net/the-football-database/images/4/4a/Manchester_City_Fernando_Reges_001.png/revision/latest/scale-to-width-down/128?cb=20150223214925"),
        new Player("Medel", "https://futhead.cursecdn.com/static/img/14/players/wc/193532.png"),
        new Player("Guilherme", "https://www.futwiz.com/assets/img/fifa16/career-faces/p200438.png"),
        new Player("Belhanda", "http://www.varzesh11.com/images/players/png/193738.png"),
        new Player("Sosa", "https://www.futwiz.com/assets/img/fifaworldcup/faces/143121.png"),
        new Player("Benzia", "https://www.pesmaster.com/pes-2018/graphics/players/player_46987.png")  
    ]

    private fcs : Player[] = [
        new Player("Rodrigues", "https://www.pesmaster.com/pes-2019/graphics/players/player_46849.png"),
        new Player("Yazici", "https://www.pesmaster.com/pes-2019/graphics/players/player_121095.png"),
        new Player("Valbuena", "https://futhead.cursecdn.com/static/img/14/players/wc/177326.png"),
        new Player("Visca", "https://cdn-origin.futview.com/players/fifa17/normal/39498.png"),
        new Player("Robinho", "https://futhead.cursecdn.com/static/img/14/players/wc/136144.png"),
        new Player("Burak", "https://www.pesmaster.com/pes-2019/graphics/players/player_34862.png"),
        new Player("Lens", "https://www.pesmaster.com/pes-2018/graphics/players/player_34878.png"),
        new Player("Quaresma", "https://cdn.sofifa.org/1x/15/players/20775.png"),
        new Player("Belhanda", "http://www.varzesh11.com/images/players/png/193738.png"),
        new Player("Onyekuru", "https://www.pesmaster.com/pes-2018/graphics/players/player_117747.png"),
        new Player("Adebayor", "https://vignette.wikia.nocookie.net/the-football-database/images/4/43/Tottenham_Hotspur_E._Adebayor_001.png/revision/latest/scale-to-width-down/128?cb=20140725205801")
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

    getMc(){
        return this.mcs.slice();
    }

    getFc(){
        return this.fcs.slice();
    }

    
}