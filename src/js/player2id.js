import {Actor, Input, Random, Vector, clamp, Timer, CollisionType, CollisionGroupManager, Delay, GamepadConnectEvent,SpriteSheet} from "excalibur"
import { Resources } from "./resources"
import { CustomCamera } from "./camera";

export class player2 extends Actor {
    game;
    scene;
    playerId;
    interactTimer = false;
    spriteSheet
    selectedP1
    selectedP2
    playerGroup
    hasCamera
    CustomCameraGroup
    player2ID
    player2
    constructor(scene, playerId,x, y, charId, charselect, hasCamera, player2CHARID){
        super({width:100, height:100, collisionType:CollisionType.Active})
        this.spriteSheet = SpriteSheet.fromImageSource({
            image: Resources.characterSheet,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 100,
                spriteHeight: 150,
            },
            spacing: {
                // Optionally specify the offset from the top left of sheet to start parsing
                originOffset: { x: 15, y: 0 },
                // Optionally specify the margin between each sprite
                margin: { x: 50, y: 100}
            }
        })
        //console.log(this.spriteSheet.sprites[0])
        this.graphics.use(this.spriteSheet.sprites[charId])
        this.pos = new Vector(x, y) 
        this.pointer.useGraphicsBounds = true
        //this.pos = new Vector(5, 100);
        this.scene = scene;
        this.playerId = playerId;
        this.charId = charId ?? 0
        this.charselect = charselect ?? 0
        this.selectedP1 = 0
        this.selectedP2 = 0
        this.hasCamera = hasCamera ?? 0
        this.player2ID = player2CHARID
        //this.player2 = new player(this,2, 5, 100, this.player2ID, 0, 0)
    }
    onInitialize(engine){
        this.game = engine
        engine.input.gamepads.enabled = true;
        if(this.hasCamera == 1){
            console.log("Where that camera at tho?")
            //this.game.add(this.player2)
            this.CustomCamera = new CustomCamera(this, this.player2)
            this.game.add(this.CustomCamera);
        }
        this.on('collisionend', () => this.stopPlayer());
    }
    stopPlayer(){
        this.vel.x = 0
        this.vel.y = 0
    }
    onPreUpdate(engine) {
        this.rotation = 0;
        
        let xspeed = 0
        let yspeed = 0

        let kb = engine.input.keyboard
        let controller = engine.input.gamepads
        controller.on('connect', () => {
           console.log("test")
        })
        if(this.charselect == 0){
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
                if (kb.isHeld(Input.Keys.I) || kb.isHeld(Input.Keys.Up)  || controller.at(1).getAxes(Input.Axes.LeftStickY) < -0.5) {
                    yspeed = -300
                }
                if (kb.isHeld(Input.Keys.K) || kb.isHeld(Input.Keys.Down)  || controller.at(1).getAxes(Input.Axes.LeftStickY) > 0.5) {
                    yspeed = 300
                }
                if (kb.isHeld(Input.Keys.J) || kb.isHeld(Input.Keys.Left) || controller.at(1).getAxes(Input.Axes.LeftStickX) < -0.5) {
                    xspeed = -300
                }
                if (kb.isHeld(Input.Keys.L) || kb.isHeld(Input.Keys.Right) || controller.at(1).getAxes(Input.Axes.LeftStickX) > 0.5) {
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
        } else{
            
            switch(this.playerId){
            case 1:
                if (this.selectedP1 != 1){
                    if (kb.wasPressed(Input.Keys.W) || kb.wasPressed(Input.Keys.Up)  || controller.at(0).getAxes(Input.Axes.LeftStickY) < -0.5) {
                        if(this.charId >= 2){ this.charId = -1} 
                        this.charId++
                        this.graphics.use(this.spriteSheet.sprites[this.charId])

                    }
                    if (kb.wasPressed(Input.Keys.S) || kb.wasPressed(Input.Keys.Down)  || controller.at(0).getAxes(Input.Axes.LeftStickY) > 0.5) {
                        if(this.charId == 0){ this.charId = 1} 
                        this.charId--
                        this.graphics.use(this.spriteSheet.sprites[this.charId])
                    }
                }
                if(kb.wasPressed(Input.Keys.Enter)){
                    this.scene.charSelected(1,this.charId, 1)
                    this.selectedP1 = 1
                }
            break;
            case 2:
                if (this.selectedP2 != 1){
                    if (kb.wasPressed(Input.Keys.I) || kb.isHeld(Input.Keys.Up)  || controller.at(1).getAxes(Input.Axes.LeftStickY) < -0.5) {
                        if(this.charId >= 2){ this.charId = -1} 
                        this.charId++
                        this.graphics.use(this.spriteSheet.sprites[this.charId])
                    }
                    if (kb.wasPressed(Input.Keys.K) || kb.wasPressed(Input.Keys.Down)  || controller.at(1).getAxes(Input.Axes.LeftStickY) > 0.5) {
                        if(this.charId == 0){ this.charId = 1} 
                        this.charId--
                        this.graphics.use(this.spriteSheet.sprites[this.charId])
                    }
                    if(kb.wasPressed(Input.Keys.ShiftRight)){
                        this.scene.charSelected(2,this.charId, 1)
                        this.selectedP2 = 1
                    }
                }
            }
        }
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