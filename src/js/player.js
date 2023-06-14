import { Actor, Input, Random, Vector, clamp } from "excalibur"
import { Resources } from "./resources"

export class player extends Actor {
    game;
    scene;
    id;
    constructor(scene, id){
        super({width:100, height:100})
        this.graphics.use(Resources.block.toSprite())
        this.pos = new Vector(100, 300) 
        this.pointer.useGraphicsBounds = true
        this.scene = scene
        this.id = id
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
        switch(this.id){
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
}