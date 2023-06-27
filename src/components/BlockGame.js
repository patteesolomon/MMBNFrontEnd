import { useState, useEffect } from 'react';

/*Grid
and such*/
import grid from '../assets/spritessheets/grid.png';
const program = require('./program');

class BlockGame extends program{
    
    constructor(programs = [])
    {
        this.programs = programs;
        this.grid = new Image(16, 16);
    }

    Game()
    {
        this.grid.src(grid);
    }
}
module.exports = BlockGame;