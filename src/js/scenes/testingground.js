import { Actor, Engine, Vector, Label, Font, Color, Random, Input, CollisionGroupManager, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, randomInRange, DisplayMode} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'
import { userInterface } from "../userinterface.js";
export class testingground extends Scene {
    game;
    userInterface;
    character;
    remainingTime;
    player1ID;
    player2ID;
    constructor() {
        super({width: 1440, height: 900, displayMode: DisplayMode.FillScreen});
        this.player = new player(this, 1)
        this.player2 = new player(this,2)
        this.userInterface = new userInterface(this)
    }
    onInitialize(engine) {
        this.game = engine
        engine.input.gamepads.enabled = true;
    }
    onActivate(ctx) {
        console.log("Scene has started");
        this.startGame()
        this.remainingTime = 98
        this.player1ID = ctx.previousScene.player1ID
        this.player2ID = ctx.previousScene.player2ID
        console.log(ctx)
        console.log(this.player1ID)
        console.log(this.player2ID)
    }
    startGame() {
        this.add(this.player)
        this.add(this.userInterface)
        const timeTimer = new Timer({
            fcn: () => this.updateTimer(),      
            repeats: true,      
            interval: 1000,  
        }) 
        this.game.currentScene.add(timeTimer)
        timeTimer.start()
    }

    loadEverything() {
      this.add(this.player)
    }
    onPreUpdate(game){
      let kb = this.game.input.keyboard
      let controller = this.game.input.gamepads
      if (kb.isHeld(Input.Keys.Enter)) {
        this.add(this.player2)
    }
}
    updateTimer(){
        this.userInterface.timerText.text = `Time remaining: ${this.remainingTime--}`
    }
}