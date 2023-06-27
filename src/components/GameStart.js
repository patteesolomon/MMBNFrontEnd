import {useEffect, useRef, useState} from 'react';
import mega from '../assets/spritessheets/MM_EXE1_b.png';
import NetBattle from './NB';
import Canvas from './Canvas';
import UseCanvas from './UseCanvas';
import ResizeCanvasToDisplaySize from './ResizeCanvas';
const Game = require('./prototype');
const connection = "j"; // fix this
const Battler = require('./Battler');
const Navi = require('./navi');
const Grid = require('../assets/spritessheets/grid.png');
const Chip = require('./Chip');

//tutorial stuff
const Virus = new Battler("Met",
    [
        new Chip("cannon", 40, "knockback", 'l', 0, "cannon"), new Chip("cannon", 40, "knockback", 'l', 0, "cannon"), new Chip("cannon", 40, "knockback", 'l', 0, "cannon")
    ], 200);

const Player = new Navi(connection,
    [
        new Chip("cannon", 40, "knockback", 'l', 0, "cannon"), new Chip("cannon", 40, "knockback", 'l', 0, "cannon"), new Chip("cannon", 40, "knockback", 'l', 0, "cannon")
    ], 200, 0, []);

const Player2 = new Navi(Virus, null, 0, 0, [null]);

const postdraw = (ds, w, h) => {
    const e = UseCanvas(ds, {width: w, height: h});
    e.index++;
    e.current();
};

const predraw = (context, canvas) => {
    context.save();
    ResizeCanvasToDisplaySize(context, canvas);
    const { width, height } = context.canvas;
    context.clearRect(0, 0, width, height);
};

export default function GameStart() {
    
    // battle interpreter
    //netBattle.startBattle();

    return (
        <>
            <Canvas draw={mega} />
        </>
    )
}