import { Actor, Engine, Vector, Label, Font, Color, Random, Input, CollisionType, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, randomInRange, Physics} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'
import { IngameButton } from "../ingameButton.js";
import { Wall } from "../wall.js";
import {MovableObject} from "../movableObject.js";

export class testingground extends Scene {
    game;
    userInterface;
    character;
    colliding = CollisionType.Fixed;
    constructor() {

        super({ width: 1280, height: 720, })
        Physics.useRealisticPhysics();
        this.player = new player(this, 1);
        this.player2 = new player(this,2);
        this.button1 = new IngameButton(50, 25, 1, this);
        this.button2 = new IngameButton(250, 25, 2, this);
        this.button3 = new IngameButton(1000, 25, 2, this);
        this.button4 = new IngameButton(1680, 130, 3, this);
        this.breakingWall = new Wall(400, 300, 400, 0);
        this.wall = new Wall(1200, 300, 0, 300);
        this.breakingWall2 = new Wall(1200, 300, 1200, 0);
        this.movableObject = new MovableObject(3)




    }
    onInitialize(engine) {
        this.game = engine
        engine.input.gamepads.enabled = true;
        let background = new Actor();
        background.graphics.use(Resources.Level1.toSprite());
        background.scale = new Vector(1.3, 1.36);
        background.pos = new Vector(775, 335);
        this.add(background);
    }
    onActivate(ctx) {
        console.log("Scene has started");
        this.startGame()
    }
    startGame() {
        this.add(this.button1);
        this.add(this.player);
        this.add(this.button2);
        this.add(this.button3);
        this.add(this.button4);
        this.add(this.breakingWall);
        this.add(this.breakingWall2);
        this.add(this.wall);
        this.add(this.movableObject);
    }
    /*
    loadEverything() {
      this.add(this.player)
            
    }
    */
    onPreUpdate(game){
        //this is puzzle one, both press the button and the door opens
        if (this.button1.openDoor && this.button2.openDoor) {
            this.breakingWall.kill();
            this.button1.openDoor = false;
            this.button2.openDoor = false;
        }
        //this is puzzle two, if the button gets pressed
        if (this.button3.openDoor) {
            this.breakingWall2.collider.set(null);
            this.button3.opendoor = false;
        } else {
            this.breakingWall2.collider.set(this.breakingWall2.box);
            this.button3.opendoor = false;
        }

        //last button checker, only works if movable object is used
        if (this.button4.openDoor) {
            this.breakingWall2.kill();
            this.button4.opendoor = false;
        }



      let kb = this.game.input.keyboard
      let controller = this.game.input.gamepads
      if (kb.isHeld(Input.Keys.Enter)) {
        this.add(this.player2)

    }
    }
}