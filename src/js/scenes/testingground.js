import { Actor, Engine, Vector, Label, Font, Color, Random, Input, CollisionGroupManager, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, randomInRange} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'
import { IngameButton } from "../ingameButton.js";
import { Wall } from "../wall.js";

export class testingground extends Scene {
    game;
    userInterface;
    character;
    constructor() {

        super({ width: 1280, height: 720 })
        this.player = new player(this, 1);
        this.player2 = new player(this,2);
        this.button1 = new IngameButton(50, 25, 1, this);
        this.button2 = new IngameButton(250, 25, 2, this);
        this.breakingWall = new Wall(400, 300, 400, 0);
        this.wall = new Wall(1200, 300, 0, 300);

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
        this.add(this.button1)
        this.add(this.player)
        this.add(this.button2)
        this.add(this.breakingWall);
        this.add(this.wall)


    }
    /*
    loadEverything() {
      this.add(this.player)
            
    }
    */
    onPreUpdate(game){
        if (this.button1.openDoor && this.button2.openDoor) {
            this.breakingWall.kill();
            this.button1.openDoor = false;
            this.button2.openDoor = false;

        }
      let kb = this.game.input.keyboard
      let controller = this.game.input.gamepads
      if (kb.isHeld(Input.Keys.Enter)) {
        this.add(this.player2)

    }
    }
}