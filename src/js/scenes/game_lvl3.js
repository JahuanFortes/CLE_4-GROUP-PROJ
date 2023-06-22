

import {
    Actor,
    Engine,
    Vector,
    Label,
    Font,
    Color,
    Random,
    Input,
    CollisionType,
    CollisionGroup,
    BoundingBox,
    EdgeCollider,
    Scene,
    Timer,
    randomInRange,
    Physics,
    BaseAlign, TextAlign, FontUnit
} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'
import { IngameButton } from "../ingameButton.js";
import { Wall } from "../wall.js";
import { Box } from "../box.js"
import {MovableObject} from "../movableObject.js";
import {Baller} from "../baller.js";
import {Leaves} from "../leaves.js";
import { Fonts } from "../fonts.js";

export class Level3 extends Scene {
    game;
    userInterface;
    character;
    colliding = CollisionType.Fixed;
    yourScore = 0;
    enemyScore = 0;
    leafArray = [];
    leafPoints = 0;
    timer;
    startBallin = false;
    winScore = 5;
    leafAmount = 15;

    constructor() {

        super({ width: 1280, height: 720, })
        this.baller = new Baller(-245, 800, Resources.block.toSprite(), this);
        this.baller2 = new Baller(-545, 800, Resources.block.toSprite(), this);
        this.ball = new MovableObject(7, Resources.Football.toSprite(), CollisionType.Active, -445, 400);

        this.footWall1 = new Wall(-1015, -445, 165, -445);
        this.footWall2 = new Wall(-1020, 975, -1020, -445);
        this.footWall3 = new Wall(-1015, 975, 165, 975);
        this.footWall4 = new Wall(165, 975, 165, -445);

        this.goLevel4 = new MovableObject(1, Resources.Ending.toSprite(), CollisionType.Passive, 2600, -300)
        this.gameFont = new Fonts();

    }


    onInitialize(engine) {
        this.game = engine
        engine.input.gamepads.enabled = true;
        let bg = new Actor();
        bg.graphics.use(Resources.Bg.toSprite());
        bg.scale = new Vector(26, 22);
        bg.pos = new Vector(775, 480);
        bg.z = 0;
        this.add(bg);

        let background = new Actor();
        background.graphics.use(Resources.realLevel3.toSprite());
        background.scale = new Vector(2.6, 2.2);
        background.pos = new Vector(775, 480);
        this.add(background);

        this.footWall3.on('collisionstart', (evt) => this.scored(evt));
        this.footWall1.on('collisionstart', (evt) => this.enemyScored(evt));
        this.playerLabel = new Label({
            text: `${this.yourScore}`,
            pos: new Vector(200, 100),
            font: this.gameFont.font
        });
        this.enemyLabel = new Label({
            text: `${this.enemyScore}`,
            pos: new Vector(200, 190),
            font: this.gameFont.font2
        });
        this.wonLabel = new Label({
            text: `You won noobs, follow the path to the end`,
            pos: new Vector(-845, -300),
            font: this.gameFont.font3
        });
        this.lostLabel = new Label({
            text: `You lost noobs, try to get to 5 points first!`,
            pos: new Vector(-845, -300),
            font: this.gameFont.font3
        });
        this.explainLabel = new Label({
            text: `Find all leaves and start ballin!`,
            pos: new Vector(2700, 900),
            font: this.gameFont.font3
        });
        this.timer = new Timer({
            fcn: () => this.spawnLeaves(),
            repeats: true,
            interval: 1,
        })


    }

    onActivate(ctx) {
        //adds players to scene and gives them the right id and location
        console.log("Level1 has started");
        console.log(ctx.previousScene);
        this.player1ID = ctx.previousScene.player1ID;
        this.player2ID = ctx.previousScene.player2ID;
        this.player = new player(this, 1, 2500, 1000, this.player1ID);
        this.player2 = new player(this,2, 2500, 1200, this.player2ID);
        //starts game
        this.startGame();
    }


    startGame() {
        this.game.currentScene.camera.strategy.lockToActor(this.player);
        this.game.currentScene.camera.zoom = 0.9;
        this.add(this.player);
        this.add(this.player2);
        this.add(this.explainLabel);
        this.game.currentScene.add(this.timer);
        this.timer.start();





    }
    spawnLeaves() {
        this.leaves = new Leaves(this);
        this.add(this.leaves);
        this.leafArray.push(this.leaves);
        if (this.leafArray.length === this.leafAmount) {
            this.removeTimer(this.timer);
        }
    }


    scored(evt) {
        if (evt.other instanceof MovableObject) {
            this.baller.actions.clearActions();
            this.baller2.actions.clearActions();
            this.yourScore += 1;

            this.player.pos = new Vector(-245, -200);
            this.player2.pos = new Vector(-545, -200);
            this.ball.pos = new Vector(-445, 400);
            this.baller.pos = new Vector(-245, 800);
            this.baller2.pos = new Vector(-545, 800);

            if (this.yourScore === this.winScore) {
                this.yourScore = 0;
                this.enemyScore = 0;
                this.baller.kill();
                this.baller2.kill();
                this.footWall1.kill();
                this.footWall2.kill();
                this.footWall3.kill();
                this.footWall4.kill();
                this.player.pos = new Vector(-245, -200);
                this.player2.pos = new Vector(-545, -200);
                this.add(this.wonLabel);
                this.add(this.goLevel4);
            }
        }


    }
    enemyScored(evt) {
        if (evt.other instanceof MovableObject) {
            this.baller.actions.clearActions();
            this.baller2.actions.clearActions();
            this.enemyScore += 1;

            this.player.pos = new Vector(-245, -200);
            this.player2.pos = new Vector(-545, -200);
            this.ball.pos = new Vector(-445, 400);
            this.baller.pos = new Vector(-245, 800);
            this.baller2.pos = new Vector(-545, 800);
            if (this.enemyScore === this.winScore) {
                this.yourScore = 0;
                this.enemyScore = 0;
                this.player.pos = new Vector(-245, -200);
                this.player2.pos = new Vector(-545, -200);
                this.ball.pos = new Vector(-445, 400);
                this.baller.pos = new Vector(-245, 800);
                this.baller2.pos = new Vector(-545, 800);
                this.add(this.lostLabel);
                this.ballerTimer = new Timer({
                    fcn: () => this.remove(this.lostLabel),
                    repeats: false,
                    interval: 1000,
                })
                this.game.currentScene.add(this.ballerTimer);
                this.ballerTimer.start();

            }
        }
    }

    createPlayArea() {
        this.startBallin = true;
        this.player.pos = new Vector(-245, -200);
        this.player2.pos = new Vector(-545, -200);
        this.add(this.baller);
        this.add(this.baller2);
        this.add(this.ball);
        this.add(this.footWall1);
        this.add(this.footWall2);
        this.add(this.footWall3);
        this.add(this.footWall4);
        this.add(this.playerLabel);
        this.add(this.enemyLabel);

    }

    onPostDraw() {
        this.enemyLabel.text = `${this.enemyScore}`;
        this.playerLabel.text = `${this.yourScore}`;

        if (this.startBallin === false) {
            if (this.leafPoints === this.leafAmount) {
                this.leafArray.splice(0, this.leafArray.length);
                this.createPlayArea();

            }
        }



        if (this.goLevel4.isColliding) {
            this.game.startLevel4();
            this.goLevel4.isColliding = false;
        }
    }
}
