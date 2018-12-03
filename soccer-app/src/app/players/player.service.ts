import { Player } from './player.model';
import { EventEmitter } from '@angular/core';

export class PlayerService{
    gkSelected = new EventEmitter<Player>();

    private gks : Player[] = [
        new Player("Muslera", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuSqvXVGvzUsMpFkGW69DYOWHv00kzE6e4s00riyox2sit5Iqww"),
        new Player("Karius", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_yQqRA7YDW0cN4gRjM2IPSL6HT6itPPSyTibgecoEke6DUx5YQ")    
    ];

    getRecipes(){
        return this.gks.slice();
    }
    
}