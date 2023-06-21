

import { Actor, Engine, Vector, Label, Font, Color, Random, Input, CollisionType, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, randomInRange, Physics, CollisionGroupManager} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'
import { IngameButton } from "../ingameButton.js";
import { Wall } from "../wall.js";
import { Box } from "../box.js"
import {MovableObject} from "../movableObject.js";
import { player2 } from "../player2id.js";

export class Level1 extends Scene {
    game;
    userInterface;
    character;
    colliding = CollisionType.Fixed;
    player1ID;
    player2ID;
    remainingTime;
    constructor() {
        super({ width: 1280, height: 720, })
        Physics.useRealisticPhysics();
    
        this.button1 = new IngameButton(1680, 130, 1, this);
        this.button2 = new IngameButton(1100, 25, 2, this);
        this.button3 = new IngameButton(700, 130, 2, this);
        this.button4 = new IngameButton(1680, 130, 3, this);



        this.wall = new Wall(845, 323, 0, 323);
        this.breakingWall = new Wall(1710, 323, 845, 323);
        this.breakingWall2 = new Wall(845, 323, 845, 0);
        this.breakingWall3 = new Wall(300, 550, 300, 850);
        //#region boxes
        this.boxes = new Box(500, 400, 800, 100);
        this.boxes2 = new Box(500, 900, 800, 100);
        this.boxes3 = new Box(500, 600, 400, 100);
        this.boxes4 = new Box(850, 700, 100, 300);
        this.boxes5 = new Box(500, 800, 400, 100);
        this.boxes6 = new Box(150, 500, 100, 100);
        this.mazeButton = new IngameButton(750, 800, 2, this);
        this.mazeButton2 = new IngameButton(250, 500, 1, this);

        //#endregion boxes


        this.movableObject = new MovableObject(3, Resources.Smallstone.toSprite(), CollisionType.Active, 300, 100);

        this.ending = new MovableObject(1, Resources.Ending.toSprite(), CollisionType.Passive, 25, 700)

        this.moveStone = new MovableObject(1, Resources.Stone.toSprite(), CollisionType.Active, 880, 510

        );



    }
    onInitialize(engine) {
        this.game = engine
        engine.input.gamepads.enabled = true;
        let background = new Actor();
        background.graphics.use(Resources.realLevel.toSprite());
        background.scale = new Vector(1.3, 1.1);
        background.pos = new Vector(775, 480);
        this.add(background);
    }
    onActivate(ctx) {
        console.log("Level1 has started");
        console.log(ctx.previousScene)
        this.player1ID = ctx.previousScene.player1ID
        this.player2ID = ctx.previousScene.player2ID
        this.player = new player(this, 1, 5, 100, this.player1ID, 0, 1, this.player2ID);
        this.player2 = new player2(this,2, 5, 100, this.player2ID, 0, 0);
        //this.game.currentScene.camera.strategy.lockToActor(this.player)
        this.startGame()
    }
    startGame() {
        this.add(this.button1);
        this.add(this.player);
        this.add(this.player2)
        this.add(this.button2);
        this.add(this.button3);

        this.add(this.breakingWall);
        this.add(this.breakingWall2);
        this.add(this.breakingWall3);
        this.add(this.wall);
        this.add(this.movableObject);


        //row one of stones, no collisions
        // this.add(this.stone);
        this.add(this.boxes);
        this.add(this.boxes2);
        this.add(this.boxes3);
        this.add(this.boxes4);
        this.add(this.boxes5);
        this.add(this.boxes6);

        this.add(this.mazeButton);
        this.add(this.mazeButton2);

        this.add(this.moveStone);
        this.add(this.ending)

    }
    /*
    loadEverything() {
      this.add(this.player)

    }
    */
    onPreUpdate(game){
        //this is puzzle one, both press the button and the door opens
        if (this.button1.openDoor && this.button2.openDoor) {
            Resources.Opendoor.play();
            this.breakingWall.kill();
            this.button1.openDoor = false;
            this.button2.openDoor = false;
        }

        if (this.mazeButton.openDoor && this.mazeButton2.openDoor) {
            this.breakingWall3.collider.set(null);
            this.mazeButton.openDoor = false;
            this.mazeButton2.openDoor = false;
        }


        //this is puzzle two, if the button gets pressed
        if (this.button3.openDoor) {

            this.breakingWall2.collider.set(null);
            this.button3.opendoor = false;
        } else {
            this.breakingWall2.collider.set(this.breakingWall2.waall);
            this.button3.opendoor = false;
        }

        //last button checker, only works if movable object is used
        if (this.button4.openDoor) {
            Resources.Opendoor.play();
            this.breakingWall2.kill();
            this.button4.opendoor = false;
        }

        if (this.ending.isColliding) {
            this.game.startLevel2();
            this.ending.isColliding = false;
        }



        let kb = this.game.input.keyboard
        let controller = this.game.input.gamepads
        if (kb.isHeld(Input.Keys.Enter)) {
            

        }
    }
}