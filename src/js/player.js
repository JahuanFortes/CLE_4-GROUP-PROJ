import {Actor, Input, Random, Vector, clamp, Timer, CollisionType, CollisionGroupManager} from "excalibur"
import { Resources } from "./resources"

export class player extends Actor {
    game;
    scene;
    playerId;
    interactTimer = false;
    static group = CollisionGroupManager.create('player');
    constructor(scene, playerId){
        super({width:100, height:100, collisionType:CollisionType.Active})
        this.graphics.use(Resources.block.toSprite())
        this.pos = new Vector(5, 5)
        this.pointer.useGraphicsBounds = true
        this.scene = scene
        this.playerId = playerId
        this.body.group = player.group;

    }
    onInitialize(engine){
        this.game = engine
        engine.input.gamepads.enabled = true;

    }
    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0

        let kb = engine.input.keyboard
        let controller = engine.input.gamepads
        switch(this.playerId){
            case 1:
                if (kb.isHeld(Input.Keys.W) || kb.isHeld(Input.Keys.Up)  || controller.at(0).getAxes(Input.Axes.LeftStickY) < -0.5) {
                    yspeed = -300
                }
                if (kb.isHeld(Input.Keys.S) || kb.isHeld(Input.Keys.Down)  || controller.at(0).getAxes(Input.Axes.LeftStickY) > 0.5) {
                    yspeed = 300
                }
                if (kb.isHeld(Input.Keys.A) || kb.isHeld(Input.Keys.Left) || controller.at(0).getAxes(Input.Axes.LeftStickX) < -0.5) {
                    xspeed = -300
                }
                if (kb.isHeld(Input.Keys.D) || kb.isHeld(Input.Keys.Right) || controller.at(0).getAxes(Input.Axes.LeftStickX) > 0.5) {
                    xspeed = 300
                }
                //interaction
                if (kb.wasPressed(Input.Keys.E)) {
                    this.interact();
                }
             break;
             case 2:
                if (kb.isHeld(Input.Keys.I) || kb.isHeld(Input.Keys.Up)  || controller.at(0).getAxes(Input.Axes.LeftStickY) < -0.5) {
                    yspeed = -300
                }
                if (kb.isHeld(Input.Keys.K) || kb.isHeld(Input.Keys.Down)  || controller.at(0).getAxes(Input.Axes.LeftStickY) > 0.5) {
                    yspeed = 300
                }
                if (kb.isHeld(Input.Keys.J) || kb.isHeld(Input.Keys.Left) || controller.at(0).getAxes(Input.Axes.LeftStickX) < -0.5) {
                    xspeed = -300
                }
                if (kb.isHeld(Input.Keys.L) || kb.isHeld(Input.Keys.Right) || controller.at(0).getAxes(Input.Axes.LeftStickX) > 0.5) {
                    xspeed = 300
                }
                 //interaction
                 if (kb.wasPressed(Input.Keys.U)) {
                     this.interact();
                 }

    }
        this.vel = new Vector(xspeed, yspeed)
        // blijf binnen beeld
        this.pos.x = clamp(this.pos.x, this.width/2, engine.drawWidth - this.width/2);
        this.pos.y = clamp(this.pos.y, this.height/2, engine.drawHeight - this.height/2);
    }
    onPostUpdate(engine){

    }
    hitSomething(event){

    }

    interact(event) {
        console.log(this.interactTimer);
        this.interactTimer = true;

        const timer = new Timer({
            fcn: () => this.interactTimer = false,
            repeats: false,
            interval: 2000,
        })

        this.game.currentScene.add(timer)

        timer.start()
        console.log(this.interactTimer);
    }
}