

import { Actor, Engine, Vector, Label, Font, Color, Random, Input, CollisionType, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, randomInRange, Physics} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'
import { IngameButton } from "../ingameButton.js";
import { Wall } from "../wall.js";
import { Box } from "../box.js"
import {MovableObject} from "../movableObject.js";
import {Baller} from "../baller.js";

export class Level3 extends Scene {
    game;
    userInterface;
    character;
    colliding = CollisionType.Fixed;
    constructor() {

        super({ width: 1280, height: 720, })
        this.baller = new Baller(-445, 800, Resources.block.toSprite(), this);
        this.ball = new MovableObject(1, Resources.Football.toSprite(), CollisionType.Active, -445, 400);

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

    startGame() {
        this.game.currentScene.camera.strategy.lockToActor(this.player);
        this.add(this.player);

            this.createPlayArea();



    }

    createPlayArea() {
        this.player.pos = new Vector(-445, -200);
        this.add(this.baller);
        this.add(this.ball);
        this.add(this.footWall1);
        this.add(this.footWall2);
        this.add(this.footWall3);
        this.add(this.footWall4);

        if (this.player.interactTimer) {
            this.ball.vel = new Vector(100, 100);
        }

    }
    
}
