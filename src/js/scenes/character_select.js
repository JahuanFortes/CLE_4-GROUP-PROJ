import { Actor, Engine, Vector, Label, Font, Color, Random, Input, CollisionGroupManager, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, randomInRange, DisplayMode} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'
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
        super({width: 1440, height: 900, displayMode: DisplayMode.FillScreen});
        this.player = new player(this, 1, 500, 400, 0, 1, 0)
        this.player2 = new player(this,2, 1000, 400, 0, 1, 0)
        this.userInterface = new userInterface(this, 0, 1)
        this.amount = 0
        this.player1ID = 0
        this.player2ID = 0
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

            this.game.goToScene('Level3', this.player1ID, this.player2ID);
        }
     }
}
    