// connection const here

const Game = require('./prototype');
const connection = "j"; // fix this
const Battler = require('./Battler');
const Navi = require('./navi');
//
const Chip = require('./Chip');
const Grid = require('../assets/spritessheets/grid.png');
/*psudo what you need on NB for controls and sprites here*/

class NB extends Game {
    constructor(name, playersAtOnce, score, scoreUnit, maxChips, config) {
        // adding params go last after the super
        super(name, playersAtOnce, score, scoreUnit);
        this.maxChips = maxChips;
        this.result = null;
        this.theDead = [];
        this.fighters = [];
        this.element = config.element;
        this.canvas = this.element ;
        this.ctx = this.canvas.getContext("2d");
    }
    init()
    {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(Grid, 640, 480);
        };
        image.src = Grid;
    }
    tieGame() {
        console.log("---NET BATTLE OVER---");
        console.log("DOUBLE DELETE!");
    }
    callWin(b = [](Battler)) {
        console.log("---NET BATTLE OVER---");
        console.log(b.name + "WIN!");
    }
    damageCheck() {
        // damage check
        this.fighters.forEach(element => {
            console.log(element.hp);
        });
    }
    cGiga(GChip, pl = Navi) {
            setTimeout(() => {
            console.log(pl.name + " uses " + GChip.name + "!");
        }, 1000);
    }
    startBattle() {
        // battle start
        console.log("---NET BATTLE START---");
        // battle loop
        while (this.playersAtOnce[0].hp > 0 && this.playersAtOnce[1].hp > 0) {
            console.log("Battle!");
            this.checkWin();
            // damage check
            this.damageCheck();
            // check gigachip using
            //this.cGiga();
            // check pa
            this.checkPa(this.fighters);
        }
    }

    // region these and use arrays later??
    // test this first
    async paData(checksum = [], battler = Battler) {
        // combo 1
        if (checksum[0].name === "cannon" &&
            checksum[1].name === "cannon" &&
            checksum[2].name === "cannon") {
            battler.setPa(true);
            let pa = new Chip("GigaCannon", 200, "knockback", 'l', 0, "cannon", "cannon", "bigCannon = GigaCannon (Big Damage)");
            await this.programAdvance(pa);
        }
    }
    async programAdvance(pa, b = Battler) {
        console.log('PROGRAM ADVANCE..');
        console.log(pa.name + "!");
        // finish
        b.setPa(false);
        // battler stat changes maybe
    }
    async checkPa(b = this.playersAtOnce)
    {
        let checksum = [];
        b.chips.forEach(element => {
            checksum += element;
        });
        for (let y = 0; y < b.length - 1; y++) {
            await this.paData(b[y].chips,b[y]);
        };
    }
    async checkWin()
    {
        let b = this.playersAtOnce;
        for (let y = 0; y < b.length - 1; y++)
        {
            if(b[y].hp <= 0)
            {
                this.theDead.push(b[y]);
            }
            if (b[y].hp > 0) {
                this.fighters.push(b[y]);
            }
            // checks if all are dead
            if(this.theDead.length === b.length)
            {
                this.result = 0;
                break;
            }
            // checks if one is alive
            else if(this.fighters.length === 1)
            {
                this.result = 1;
                break;
            }
        }
            b.then(() => {
                if (this.result === 0) {
                    this.tieGame();
                    return;
                }
                else if (this.result === 1) {
                    this.callWin();
                    return;
                }
            }).catch((err) => {
                throw err;
            });
    }
}

module.exports = NB;