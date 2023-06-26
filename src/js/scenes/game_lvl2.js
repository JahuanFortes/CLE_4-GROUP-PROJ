import { Actor, Engine, Vector, Label, Font, Color, Random, Input, CollisionType, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, randomInRange, Physics, CollisionGroupManager} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'
import { IngameButton } from "../ingameButton.js";
import { Wall } from "../wall.js";
import { Box } from "../box.js"
import {MovableObject} from "../movableObject.js";
import {Secret_sign} from "../secret_sign.js";
import {PigeonLabels} from "../pigeonLabels.js";
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

    this.breakWall1 = new MovableObject(1, Resources.Level2Movewall.toSprite(), CollisionType.Fixed, 106, 337);
    this.breakWall2 = new MovableObject(1, Resources.Level2Onewall.toSprite(), CollisionType.Fixed, 1930, 740);
    this.breakWall3 = new MovableObject(1, Resources.Level2Twowall.toSprite(), CollisionType.Fixed, -695, 1010);

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

    this.firstPigeon = new PigeonLabels();
    this.secondSign = new Secret_sign(this, 2000, 1200, this.firstPigeon.pigeonLabel4);
    this.secondSign2 = new Secret_sign(this, 2300, 100, this.firstPigeon.pigeonLabel5);
    this.secondSign3 = new Secret_sign(this, -700, -400, this.firstPigeon.pigeonLabel6);
    //#region not needed
    this.tree = new MovableObject(7, Resources.Tree.toSprite(), CollisionType.PreventCollision, 455, 600);
    this.ball = new MovableObject(7, Resources.Tennisball.toSprite(), CollisionType.Active, 455, 600);
    this.movableObject = new MovableObject(3, Resources.Smallstone.toSprite(), CollisionType.Active, 300, 100);
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
    let bg = new Actor();
    bg.graphics.use(Resources.Bg.toSprite());
    bg.scale = new Vector(26, 22);
    bg.pos = new Vector(775, 480);
    bg.z = 0;
    this.add(bg);
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
    this.player = new player(this, 1, 2400, 1000, this.player1ID, 0, 1);
    this.player2 = new player(this, 2, 2400, -100, this.player2ID, 0, 0);
    //#endregion Players

    //starts game
    this.startGame();
  }

  startGame() {
    this.game.currentScene.camera.strategy.lockToActor(this.player);

    this.add(this.player);
    this.add(this.player2);
    //#region Buttons
    this.add(this.button1);
    this.add(this.button2);
    this.add(this.button3);
    this.add(this.button4);
    //#endregion Buttons

    //#region Walls

    this.add(this.breakWall1);


    this.add(this.breakWall2);
    this.add(this.breakWall3);
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

    this.add(this.secondSign);
    this.add(this.secondSign2);
    this.add(this.secondSign3);

    this.add(this.ball);
    this.add(this.tree);
    this.add(this.ending);


  }

  onPreUpdate(game) {
    //this is puzzle one, both press the button and the door opens
    //these are all if statements used to check for buttons etc.
    //#region Puzzles
    if (this.button3.openDoor && this.button4.openDoor) {
      Resources.Opendoor.play();
      this.breakWall3.kill();
      this.button3.openDoor = false;
      this.button4.openDoor = false;
    }

    if (this.button1.openDoor) {
      this.breakWall2.kill();
      this.button1.openDoor = false;
    }

    if (this.button2.openDoor) {
      Resources.Opendoor.play();
      this.breakWall1.kill();
      this.button2.openDoor = false;
    }

    if (this.ending.isColliding) {
      this.game.startLevel3();
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
}