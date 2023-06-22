

import { Actor, Engine, Vector, Label, Font, Color, Random, Input, CollisionType, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, randomInRange, Physics} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'
import { IngameButton } from "../ingameButton.js";
import { Wall } from "../wall.js";
import { Box } from "../box.js"
import {MovableObject} from "../movableObject.js";

export class Level2 extends Scene {
  game;
  userInterface;
  character;
  player1ID;
  player2ID;
  remainingTime;

  constructor() {
    super({ width: 1280, height: 720 });
    Physics.useRealisticPhysics();

    //#region buttons
    this.button1 = new IngameButton(100, -80, 1, this);
    this.button2 = new IngameButton(1950, 650, 2, this);
    this.button3 = new IngameButton(100, 1150, 2, this);
    this.button4 = new IngameButton(100, 900, 3, this);
    //#endregion buttons

    //#region walls
    this.wall = new Wall(-5, 230, 215, 230);
    this.wall2 = new Wall(-5, 310, 215, 310);
    this.wall3 = new Wall(1810, 754, 2100, 754);
    this.wall4 = new Wall(-672, 836, -672, 1180);
    //#endregion walls

    //#region boxes
    this.boxes = new Box(1466, 270, 2500, 88);
    this.boxes2 = new Box(-500, 270, 1000, 88);
    this.boxes3 = new Box(-1030, -40, 88, 900);
    this.boxes4 = new Box(2600, -40, 88, 850);
    this.boxes5 = new Box(1650, 640, 50, 240);
    this.boxes6 = new Box(2222, 640, 50, 240);
    this.boxes7 = new Box(1890, 530, 610, 50);
    this.boxes8 = new Box(2215, 740, 100, 40);
    this.boxes9 = new Box(1700, 740, 100, 40);
    this.boxes10 = new Box(-900, 740, 500, 100);
    this.boxes11 = new Box(-900, 1240, 500, 100);
    //#endregion boxes

    //#region not needed
    this.movableObject = new MovableObject(
      3,
      Resources.Smallstone.toSprite(),
      CollisionType.Active,
      300,
      100
    );
    this.moveStone = new MovableObject(
      1,
      Resources.Stone.toSprite(),
      CollisionType.Active,
      880,
      510
    );
    //#endregion not needed

    //#region Ending
    this.ending = new MovableObject(
      1,
      Resources.Ending.toSprite(),
      CollisionType.Passive,
      -900,
      1000
    );
    //#endregion Ending
  }

  onInitialize(engine) {
    //gets engine to use for controllers, also adds background with right scale and pos

    //#region background
    this.game = engine;
    engine.input.gamepads.enabled = true;
    let background = new Actor();
    background.graphics.use(Resources.Level2.toSprite());
    background.scale = new Vector(2.6, 2.2);
    background.pos = new Vector(775, 480);
    this.add(background);
    //#endregion background
  }

  onActivate(ctx) {
    //adds players to scene and gives them the right id and location
    console.log("Level1 has started");
    console.log(ctx.previousScene);

    //#region Players
    this.player1ID = ctx.previousScene.player1ID;
    this.player2ID = ctx.previousScene.player2ID;
    this.player = new player(this, 1, 2400, 1000, this.player1ID);
    this.player2 = new player(this, 2, 2400, -100, this.player2ID);
    //#endregion Players

    //starts game
    this.startGame();
  }

  startGame() {
    this.game.currentScene.camera.strategy.lockToActor(this.player);

    this.add(this.player);

    //#region Buttons
    this.add(this.button1);
    this.add(this.button2);
    this.add(this.button3);
    this.add(this.button4);
    //#endregion Buttons

    //#region Walls
    this.add(this.wall);
    this.add(this.wall2);
    this.add(this.wall3);
    this.add(this.wall4);
    //#endregion Walls

    //#region Boxes
    //all boxes used for the maze
    this.add(this.boxes);
    this.add(this.boxes2);
    this.add(this.boxes3);
    this.add(this.boxes4);
    this.add(this.boxes5);
    this.add(this.boxes6);
    this.add(this.boxes7);
    this.add(this.boxes8);
    this.add(this.boxes9);
    this.add(this.boxes10);
    this.add(this.boxes11);
    //#endregion Boxes

    this.add(this.ending);
  }

  onPreUpdate(game) {
    //this is puzzle one, both press the button and the door opens
    //these are all if statements used to check for buttons etc.
    //#region Puzzles
    if (this.button3.openDoor && this.button4.openDoor) {
      Resources.Opendoor.play();
      this.wall4.kill();
      this.button3.openDoor = false;
      this.button4.openDoor = false;
    }

    if (this.button1.openDoor) {
      this.wall3.kill();
      this.button1.openDoor = false;
    }

    if (this.button2.openDoor) {
      Resources.Opendoor.play();
      this.wall.kill();
      this.wall2.kill();
      this.button2.openDoor = false;
    }

    if (this.ending.isColliding) {
      this.game.startLevel2();
      this.ending.isColliding = false;
    }
    //#endregion Puzzles

    //#region Controller
    //also adds keyboard and controller to use ingame
    let kb = this.game.input.keyboard;
    let controller = this.game.input.gamepads;
    if (kb.isHeld(Input.Keys.Enter)) {
      this.add(this.player2);
    }
}