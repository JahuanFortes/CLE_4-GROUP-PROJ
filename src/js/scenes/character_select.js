import {
  Actor,
  Engine,
  Vector,
  Label,
  Font,
  Color,
  Random,
  Input,
  CollisionGroupManager,
  CollisionGroup,
  BoundingBox,
  EdgeCollider,
  Scene,
  Timer,
  randomInRange,
  DisplayMode,
} from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import { player } from "../player.js";
import { userInterface } from "../userinterface.js";
export class character_select extends Scene {
    game;
    userInterface;
    character;
    remainingTime;
    amount;
    player1ID;
    player2ID;
    constructor() {
        super({width: 1280, height: 720});
        this.userInterface = new userInterface(this, 0, 1)
        this.player = new player(this, 1, 500, 450, 0, 1, 0, this.userInterface)
        this.player2 = new player(this,2, 900, 450, 0, 1, 0, this.userInterface)
        this.amount = 0
        this.player1ID = 0
        this.player2ID = 0
    }
    onInitialize(engine) {
        this.game = engine
        engine.input.gamepads.enabled = true;
        let bg = new Actor({});
        bg.graphics.use(Resources.Backbroundstart.toSprite());
        bg.scale = new Vector(1.3, 1.3);
        bg.pos = new Vector(775, 480);
        bg.z = 0;

        this.add(bg);
    }
    onActivate(ctx) {
        console.log("Scene has started");
        this.startGame()

    }
    startGame() {
        this.add(this.player)
        this.add(this.player2)
        this.add(this.userInterface)
    }

    onPreUpdate(game){
      let kb = this.game.input.keyboard
      let controller = this.game.input.gamepads

     }
     charSelected(player, userId, amount){
        this.amount+=amount
        console.log(this.amount)
        if(player === 1){
            this.player1ID = userId
        }
        if(player === 2){
            this.player2ID = userId
        }
        if(this.amount === 2){

            this.game.goToScene('Level2', this.player1ID, this.player2ID);
        }
     }
}
