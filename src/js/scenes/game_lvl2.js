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
} from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { player } from "../player.js";
import { IngameButton } from "../ingameButton.js";
import { Wall } from "../wall.js";
import { Box } from "../box.js";
import { MovableObject } from "../movableObject.js";

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

    // this.mazeButton = new IngameButton(750, 800, 2, this);
    // this.mazeButton2 = new IngameButton(250, 500, 1, this);
    //#endregion buttons

    //#region walls
    this.wall = new Wall(-5, 230, 215, 230);
    this.wall2 = new Wall(-5, 310, 215, 310);
    this.wall3 = new Wall(1810, 754, 2100, 754);
    this.wall4 = new Wall(-672, 836, -672, 1180);

    // this.breakingWall = new Wall(1710, 323, 845, 323);
    // this.breakingWallImg = new MovableObject(1, Resources.Onewall.toSprite(), CollisionType.Passive, 400, 30);
    this.breakingWall2 = new Wall(845, 323, 845, 0);
    this.breakingWall3 = new Wall(300, 550, 300, 850);
    //#endregion walls

    //#region boxes
    this.boxes = new Box(1466, 270, 2500, 88);
    this.boxes2 = new Box(10, 270, 300, 88);

    //#endregion boxes

    //#region objects
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
    //#endregion objects
    this.ending = new MovableObject(
      1,
      Resources.Ending.toSprite(),
      CollisionType.Passive,
      -900,
      1000
    );
  }

  onInitialize(engine) {
    //gets engine to use for controllers, also adds background with right scale and pos
    this.game = engine;
    engine.input.gamepads.enabled = true;
    let background = new Actor();
    background.graphics.use(Resources.Level2.toSprite());
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
    this.player = new player(this, 1, 40, -100, this.player1ID);
    this.player2 = new player(this, 2, 5, 100, this.player2ID);
    //starts game
    this.startGame();
  }

  startGame() {
    this.game.currentScene.camera.strategy.lockToActor(this.player);
    this.add(this.player);
    console.log(this.player);
    //#region addedButtons
    this.add(this.button1);
    this.add(this.button2);
    this.add(this.button3);
    this.add(this.button4);

    // this.add(this.mazeButton);
    // this.add(this.mazeButton2);
    //#endregion addedButtons

    //#region addedWalls
    // this.add(this.breakingWall);
    // this.add(this.breakingWall2);
    // this.add(this.breakingWall3);
    // this.add(this.wall);
    // this.add(this.wall2);
    this.add(this.wall);
    this.add(this.wall2);
    this.add(this.wall3);
    this.add(this.wall4);

    //#endregion addedWalls

    //#region addedBoxes
    //all boxes used for the maze
    this.add(this.boxes);
    //#endregion addedBoxes

    // this.add(this.movableObject);
    // this.add(this.moveStone);
    this.add(this.ending);
  }
  /*
    loadEverything() {
      this.add(this.player)

    }
    */
  onPreUpdate(game) {
    //this is puzzle one, both press the button and the door opens
    //these are all if statements used to check for buttons etc.
    // if (this.button1.openDoor && this.button2.openDoor) {
    //   Resources.Opendoor.play();
    //   this.breakingWall.kill();
    //   this.button1.openDoor = false;
    //   this.button2.openDoor = false;
    // }

    // if (this.mazeButton.openDoor && this.mazeButton2.openDoor) {
    //   this.breakingWall3.collider.set(null);
    //   this.mazeButton.openDoor = false;
    //   this.mazeButton2.openDoor = false;
    // }

    //this is puzzle two, if the button gets pressed
    // if (this.button3.openDoor) {
    //   this.breakingWall2.collider.set(null);
    //   this.button3.opendoor = false;
    // } else {
    //   this.breakingWall2.collider.set(this.breakingWall2.waall);
    //   this.button3.opendoor = false;
    // }

    //last button checker, only works if movable object is used
    // if (this.button4.openDoor) {
    //   //   Resources.Opendoor.play();
    //   this.breakingWall2.kill();
    //   this.button4.opendoor = false;
    // }

    if (this.ending.isColliding) {
      this.game.startLevel2();
      this.ending.isColliding = false;
    }

    //also adds keyboard and controller to use ingame
    let kb = this.game.input.keyboard;
    let controller = this.game.input.gamepads;
    if (kb.isHeld(Input.Keys.Enter)) {
      this.add(this.player2);
    }
  }
}
