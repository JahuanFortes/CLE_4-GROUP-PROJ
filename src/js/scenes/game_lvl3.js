

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
    BaseAlign, TextAlign
} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'
import { IngameButton } from "../ingameButton.js";
import { Wall } from "../wall.js";
import { Box } from "../box.js"
import {MovableObject} from "../movableObject.js";
import {Baller} from "../baller.js";
import {Leaves} from "../leaves.js";

export class Level3 extends Scene {
    game;
    userInterface;
    character;
    colliding = CollisionType.Fixed;
    yourScore = 0;
    enemyScore = 0;
    leafArray = [];
    timer;
    constructor() {

        super({ width: 1280, height: 720, })
        this.baller = new Baller(-245, 800, Resources.block.toSprite(), this);
        this.baller2 = new Baller(-545, 800, Resources.block.toSprite(), this);
        this.ball = new MovableObject(7, Resources.Football.toSprite(), CollisionType.Active, -445, 400);

        this.footWall1 = new Wall(-1015, -445, 165, -445);
        this.footWall2 = new Wall(-1020, 975, -1020, -445);
        this.footWall3 = new Wall(-1015, 975, 165, 975);
        this.footWall4 = new Wall(165, 975, 165, -445);


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
        this.label = new Label({
            text: `${this.yourScore}`,
            pos: new Vector(200, 190),
            font: new Font({
                family: 'arial',
                // style: FontStyle.Italic,
                size: 40,
                strokeColor: Color.Black,
                lineWidth: 2,
                bold: true,
                color: Color.White,
                baseAlign: BaseAlign.Top,
                textAlign: TextAlign.Center
            })
        });
        this.enemyLabel = new Label({
            text: `${this.enemyScore}`,
            pos: new Vector(200, 100),
            font: new Font({
                family: 'arial',
                // style: FontStyle.Italic,
                size: 40,
                strokeColor: Color.Black,
                lineWidth: 2,
                bold: true,
                color: Color.White,
                baseAlign: BaseAlign.Top,
                textAlign: TextAlign.Center
            })
        })



    }

    onActivate(ctx) {
        //adds players to scene and gives them the right id and location
        console.log("Level1 has started");
        console.log(ctx.previousScene);
        this.player1ID = ctx.previousScene.player1ID;
        this.player2ID = ctx.previousScene.player2ID;
        this.player = new player(this, 1, 300, -300, this.player1ID);
        this.player2 = new player(this,2, 5, 100, this.player2ID);
        //starts game
        this.startGame();
    }

    timerFunction() {



    }

    startGame() {
        this.game.currentScene.camera.strategy.lockToActor(this.player);
        this.game.currentScene.camera.zoom = 0.9
        this.add(this.player);
        this.add(this.player2);
        this.timer = new Timer({
            fcn: () => this.spawnLeaves(),
            repeats: true,
            interval: 1,
        })

        this.game.currentScene.add(this.timer)
        this.timer.start()




        // this.createPlayArea();


    }
    spawnLeaves() {
        this.leaves = new Leaves(this);
        this.add(this.leaves);
        this.leafArray.push(this.leaves);
        if (this.leafArray.length === 10) {
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
        }
    }

    createPlayArea() {
        this.player.pos = new Vector(-245, -200);
        this.player2.pos = new Vector(-545, -200);
        this.add(this.baller);
        this.add(this.baller2);
        this.add(this.ball);
        this.add(this.footWall1);
        this.add(this.footWall2);
        this.add(this.footWall3);
        this.add(this.footWall4);

            this.add(this.label);
            this.add(this.enemyLabel);




    }
    onPostDraw() {
        this.label.text = `${this.yourScore}`
        this.enemyLabel.text = `${this.enemyScore}`
    }
}
