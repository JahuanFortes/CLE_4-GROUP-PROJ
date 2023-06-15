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
        this.button1 = new IngameButton(200, 100, 1, this, Resources.TestButton.toSprite());
        this.button2 = new IngameButton(400, 100, 2, this, Resources.TestButton2.toSprite());
        this.breakingWall = new Wall(500, 200, 500, 0);
        this.wall = new Wall(500, 200, 0, 200);

    }
    onInitialize(engine) {
        this.game = engine
        engine.input.gamepads.enabled = true;

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
      let kb = this.game.input.keyboard
      let controller = this.game.input.gamepads
      if (kb.isHeld(Input.Keys.Enter)) {
        this.add(this.player2)

    }
    }
}