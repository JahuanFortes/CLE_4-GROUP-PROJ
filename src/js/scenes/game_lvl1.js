import { Actor, Engine, Vector, Label, Font, Color, Random, Input, CollisionType, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, randomInRange, Physics, CollisionGroupManager} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'
import { IngameButton } from "../ingameButton.js";
import { Wall } from "../wall.js";
import { Box } from "../box.js"
import {MovableObject} from "../movableObject.js";
import {Secret_sign} from "../secret_sign.js";
import {PigeonLabels} from "../pigeonLabels.js";

export class Level1 extends Scene {
    game;
    userInterface;
    character;
    breakable = CollisionType.Fixed;
    player1ID;
    player2ID;
    remainingTime;
    background;
    constructor() {

        super({ width: 1280, height: 720 })
        Physics.useRealisticPhysics();

        //#region buttons
        this.button1 = new IngameButton(2500, -150, 1, this);
        this.button2 = new IngameButton(1300, -400, 2, this);
        this.button3 = new IngameButton(500, -200, 2, this);
        this.button4 = new IngameButton(1680, 130, 3, this);

        this.mazeButton = new IngameButton(750, 1150, 2, this);
        this.mazeButton2 = new IngameButton(-50, 550, 1, this);
        //#endregion buttons

        //#region walls
        this.wall = new Wall(-1095, 165, 915, 165);

       this.breakingWallImg = new MovableObject(1, Resources.Onewall.toSprite(), CollisionType.Fixed, 1005, -175);
        this.breakingWallFence = new MovableObject(1, Resources.Fence.toSprite(), CollisionType.Fixed, 1850, 200);

        this.breakingWallRock = new MovableObject(1, Resources.Moverock.toSprite(), CollisionType.Fixed, -250, 950)
        //#endregion walls

        //#region boxes
        this.boxes = new Box(250, 350, 1600, 200);
        this.boxes2 = new Box(250, 1350, 1600, 200);
        this.boxes3 = new Box(250, 750, 800, 200);
        this.boxes4 = new Box(950, 950, 200, 600);
        this.boxes5 = new Box(250, 1150, 800, 200);
        this.boxes6 = new Box(-250, 550, 200, 200);
        //#endregion boxes

        //#region objects
        this.movableObject = new MovableObject(3, Resources.Smallstone.toSprite(), CollisionType.Active, -500, -200);
        this.nextLevel = new MovableObject(1, Resources.Ending.toSprite(), CollisionType.Passive, -1050, 1050)
        this.moveStone = new MovableObject(1, Resources.Stone.toSprite(), CollisionType.Active, 1000, 550);
        //#endregion objects

        this.firstSign = new Secret_sign(this, -900, -400);





    }

    onInitialize(engine) {
        //gets engine to use for controllers, also adds background with right scale and pos
        this.game = engine
        engine.input.gamepads.enabled = true;


        let bg = new Actor();
        bg.graphics.use(Resources.Bg.toSprite());
        bg.scale = new Vector(26, 22);
        bg.pos = new Vector(775, 480);
        bg.z = 0;
        this.add(bg);

        //this is the playable background
        this.background = new Actor();
        this.background.graphics.use(Resources.realLevel.toSprite());
        this.background.scale = new Vector(2.6, 2.2);
        this.background.pos = new Vector(775, 480);
        this.add(this.background);
    }

    onActivate(ctx) {
        //adds players to scene and gives them the right id and location
        console.log("Level1 has started");
        console.log(ctx.previousScene)
        this.player1ID = ctx.previousScene.player1ID
        this.player2ID = ctx.previousScene.player2ID
        this.player = new player(this, 1, -700, -75, this.player1ID, 0, 1,);
        this.player2 = new player(this,2, -700, -225, this.player2ID, 0, 0);
        this.startGame()
    }

    startGame() {
        this.game.currentScene.camera.strategy.lockToActor(this.player)
        this.game.currentScene.camera.zoom = 0.9
        this.add(this.player);
        this.add(this.player2)

        //#region addedButtons
        this.add(this.button1);
        this.add(this.button2);
        this.add(this.button3);
        this.add(this.mazeButton);
        this.add(this.mazeButton2);
        //#endregion addedButtons

        //#region addedWalls
        this.add(this.wall);
        //#endregion addedWalls

        //#region addedBoxes
        //all boxes used for the maze
        this.add(this.boxes);
        this.add(this.boxes2);
        this.add(this.boxes3);
        this.add(this.boxes4);
        this.add(this.boxes5);
        this.add(this.boxes6);
        //#endregion addedBoxes

        this.add(this.movableObject);
        this.add(this.moveStone);

        this.add(this.nextLevel)

        this.add(this.breakingWallImg);
        this.add(this.breakingWallFence);
        this.add(this.breakingWallRock);
        this.add(this.firstSign);
    }
    /*
    loadEverything() {
      this.add(this.player)

    }
    */
    onPreUpdate(game){
        //this is puzzle one, both press the button and the door opens
        //these are all if statements used to check for buttons etc.
        if (this.button1.openDoor && this.button2.openDoor) {
            Resources.Opendoor.play();
            this.breakingWallFence.kill();
            this.button1.openDoor = false;
            this.button2.openDoor = false;
        }

        if (this.mazeButton.openDoor && this.mazeButton2.openDoor) {
            this.breakingWallRock.kill();
            this.mazeButton.openDoor = false;
            this.mazeButton2.openDoor = false;
        }


        //this is puzzle two, if the button gets pressed
        if (this.button3.openDoor) {
            this.breakingWallImg.kill();
            this.button3.opendoor = false;
        } else {
            this.add(this.breakingWallImg);
            this.button3.opendoor = false;
        }

        //last button checker, only works if movable object is used
        if (this.button4.openDoor) {
            Resources.Opendoor.play();
            this.button4.opendoor = false;
        }

        if (this.nextLevel.isColliding) {
            this.game.startLevel2();
            this.nextLevel.isColliding = false;
        }


        //also adds keyboard and controller to use ingame
        let kb = this.game.input.keyboard
        let controller = this.game.input.gamepads
        if (kb.isHeld(Input.Keys.Enter)) {
            

        }
    }
}