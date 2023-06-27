import {Actor, Input, Random, Vector, clamp, Timer, CollisionType, CollisionGroupManager, Delay, GamepadConnectEvent,SpriteSheet, CollisionGroup, range, Animation} from "excalibur"
import { Resources } from "./resources"
import { CustomCamera } from "./camera";
export class player extends Actor {
    game;
    scene;
    playerId;
    interactTimer = false;
    spriteSheet
    spriteSheet2
    spriteSheet3
    spriteSheet4
    spriteSheetSWalk1
    spriteSheetSWalk2
    spriteSheetSWalk3
    spriteSheetSWalk4

    selectedP1
    selectedP2
    playerGroup
    hasCamera
    player2
    lastFrame
    static group = CollisionGroupManager.create('player');
    constructor(scene, playerId,x, y, charId, charselect, hasCamera){

        super({width:100, height:100, collisionType:CollisionType.Active})
        //Create all spritesheets for all the characters

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
        this.spriteSheetSWalk1 = SpriteSheet.fromImageSource({
            image: Resources.CharacterSWalkSheet1,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        }) 
        this.spriteSheetSWalk2 = SpriteSheet.fromImageSource({
            image: Resources.CharacterSWalkSheet2,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        }) 
        this.spriteSheetSWalk3 = SpriteSheet.fromImageSource({
            image: Resources.CharacterSWalkSheet3,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        }) 
        this.spriteSheetSWalk4 = SpriteSheet.fromImageSource({
            image: Resources.CharacterSWalkSheet4,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        }) 
        this.spriteSheetFWalk1 = SpriteSheet.fromImageSource({
            image: Resources.CharacterFWalkSheet1,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        })
        this.spriteSheetFWalk2 = SpriteSheet.fromImageSource({
            image: Resources.CharacterFWalkSheet2,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        }) 
        this.spriteSheetFWalk3 = SpriteSheet.fromImageSource({
            image: Resources.CharacterFWalkSheet3,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        }) 
        this.spriteSheetFWalk4 = SpriteSheet.fromImageSource({
            image: Resources.CharacterFWalkSheet4,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        })  
        this.spriteSheetBWalk1 = SpriteSheet.fromImageSource({
            image: Resources.CharacterBWalkSheet1,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        })
        this.spriteSheetBWalk2 = SpriteSheet.fromImageSource({
            image: Resources.CharacterBWalkSheet2,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        }) 
        this.spriteSheetBWalk3 = SpriteSheet.fromImageSource({
            image: Resources.CharacterBWalkSheet3,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        }) 
        this.spriteSheetBWalk4 = SpriteSheet.fromImageSource({
            image: Resources.CharacterBWalkSheet4,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        })  
        this.spriteSheetSWalk = SpriteSheet.fromImageSource({
            image: Resources.CharacterSWalkSheet,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        }) 
        this.spriteSheetFWalk = SpriteSheet.fromImageSource({
            image: Resources.CharacterFWalkSheet,
            grid: {
                rows: 1,
                columns: 5,
                spriteWidth: 55,
                spriteHeight: 100,
            }
        })

        console.log(this.spriteSheetSWalk)
        this.runAnim = Animation.fromSpriteSheet(this.spriteSheetSWalk, range(0,3), 200)
        this.runAnimF = Animation.fromSpriteSheet(this.spriteSheetFWalk, range(0,3), 200)
        this.body.group = player.group;
        this.graphics.use(this.spriteSheetSWalk1.sprites[0])
        this.pos = new Vector(x, y) 
        this.pointer.useGraphicsBounds = true
        //this.pos = new Vector(5, 100);
        this.scene = scene;
        this.playerId = playerId;
        this.charId = charId ?? 0
        switch(this.charId){
            case 0:
                this.runAnim = Animation.fromSpriteSheet(this.spriteSheetSWalk1, range(0,3), 200)
                this.runAnimF = Animation.fromSpriteSheet(this.spriteSheetFWalk1, range(0,3), 200)
                this.runAnimB = Animation.fromSpriteSheet(this.spriteSheetBWalk1, range (0,3), 200)
                this.pickupAnim = this.spriteSheetFWalk1.sprites[4];
                break;
            case 1:
                this.runAnim = Animation.fromSpriteSheet(this.spriteSheetSWalk2, range(0,3), 200)
                this.runAnimF = Animation.fromSpriteSheet(this.spriteSheetFWalk2, range(0,3), 200)
                this.runAnimB = Animation.fromSpriteSheet(this.spriteSheetBWalk2, range (0,3), 200)
                this.pickupAnim = this.spriteSheetFWalk2.sprites[4];
                break;
            case 2:
                this.runAnim = Animation.fromSpriteSheet(this.spriteSheetSWalk3, range(0,3), 200)
                this.runAnimF = Animation.fromSpriteSheet(this.spriteSheetFWalk3, range(0,3), 200)
                this.runAnimB = Animation.fromSpriteSheet(this.spriteSheetBWalk3, range (0,3), 200)
                this.pickupAnim = this.spriteSheetFWalk3.sprites[4];
                break;
            case 3:
                this.runAnim = Animation.fromSpriteSheet(this.spriteSheetSWalk4, range(0,3), 200)
                this.runAnimF = Animation.fromSpriteSheet(this.spriteSheetFWalk4, range(0,3), 200)
                this.runAnimB = Animation.fromSpriteSheet(this.spriteSheetBWalk4, range (0,3), 200)
                this.pickupAnim = this.spriteSheetFWalk4.sprites[4];
                break;
        }
        
        this.charselect = charselect ?? 0
        this.selectedP1 = 0
        this.selectedP2 = 0
        this.hasCamera = hasCamera ?? 0
        this.lastFrame = 0
        this.z = 20;
    }
    onInitialize(engine){
        this.game = engine
        engine.input.gamepads.enabled = true;
        if(this.hasCamera == 1){
            this.CustomCamera = new CustomCamera(this, this.scene)
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
            if (this.interactTimer === false) {
                switch(this.charId){
                    case 0:
                        this.graphics.use(this.spriteSheetFWalk1.sprites[0])
                        break;
                    case 1:
                        this.graphics.use(this.spriteSheetFWalk2.sprites[0])
                        break;
                    case 2:
                        this.graphics.use(this.spriteSheetFWalk3.sprites[0])
                        break;
                    case 3:
                        this.graphics.use(this.spriteSheetFWalk4.sprites[0])
                        break;
                 }
            }
            
         
         
        //this.graphics.use(this.spriteSheetSWalk.sprites[0])
        switch(this.playerId){
            case 1:
                if (kb.isHeld(Input.Keys.W) || kb.isHeld(Input.Keys.Up)  || controller.at(0).getAxes(Input.Axes.LeftStickY) < -0.5) {
                    yspeed = -300
                    this.graphics.use(this.runAnimF)
                    this.graphics.use(this.runAnimB)
                }
                if (kb.isHeld(Input.Keys.S) || kb.isHeld(Input.Keys.Down)  || controller.at(0).getAxes(Input.Axes.LeftStickY) > 0.5) {
                    yspeed = 300
                    this.graphics.use(this.runAnimF)
                }
                if (kb.isHeld(Input.Keys.A) || kb.isHeld(Input.Keys.Left) || controller.at(0).getAxes(Input.Axes.LeftStickX) < -0.5) {
                    xspeed = -300
                    this.graphics.use(this.runAnim).flipHorizontal = true
                }
                if (kb.isHeld(Input.Keys.D) || kb.isHeld(Input.Keys.Right) || controller.at(0).getAxes(Input.Axes.LeftStickX) > 0.5) {
                    xspeed = 300
                    this.graphics.use(this.runAnim).flipHorizontal = false
                }
                //interaction
                if (kb.wasPressed(Input.Keys.E)) {
                    this.interact();
                }
             break;
             case 2:
                if (kb.isHeld(Input.Keys.I) || kb.isHeld(Input.Keys.Up)  || controller.at(1).getAxes(Input.Axes.LeftStickY) < -0.5) {
                    yspeed = -300
                    this.graphics.use(this.runAnimB)
                }
                if (kb.isHeld(Input.Keys.K) || kb.isHeld(Input.Keys.Down)  || controller.at(1).getAxes(Input.Axes.LeftStickY) > 0.5) {
                    yspeed = 300
                    this.graphics.use(this.runAnimF)
                }
                if (kb.isHeld(Input.Keys.J) || kb.isHeld(Input.Keys.Left) || controller.at(1).getAxes(Input.Axes.LeftStickX) < -0.5) {
                    xspeed = -300
                    this.graphics.use(this.runAnim).flipHorizontal = true
                }
                if (kb.isHeld(Input.Keys.L) || kb.isHeld(Input.Keys.Right) || controller.at(1).getAxes(Input.Axes.LeftStickX) > 0.5) {
                    xspeed = 300
                    this.graphics.use(this.runAnim).flipHorizontal = false
                }
                 //interaction
                 if (kb.wasPressed(Input.Keys.U)) {
                     this.interact();
                 }

            }
        this.vel = new Vector(xspeed, yspeed)

        // blijf binnen beeld

            this.pos.x = clamp(this.pos.x, -1050, Resources.realLevel.width * 1.84 - this.width/2);
            this.pos.y = clamp(this.pos.y, -460, Resources.realLevel.height * 1.633- this.height/2);


        } else{
            console.log(this.charId)
            switch(this.playerId){
            case 1:
                if (this.selectedP1 != 1){
                    if (kb.wasPressed(Input.Keys.W) || kb.wasPressed(Input.Keys.Up)  || controller.at(0).getAxes(Input.Axes.LeftStickY) < -0.5) {
                        if(this.charId >= 3){ this.charId = -1} 
                        this.charId++
                        switch(this.charId){
                            case 0: 
                                this.graphics.use(this.spriteSheetSWalk1.sprites[0])
                                break;
                            case 1:
                                this.graphics.use(this.spriteSheetSWalk2.sprites[0])
                                break;
                            case 2:
                                this.graphics.use(this.spriteSheetSWalk3.sprites[0])
                                break;
                            case 3:
                                this.graphics.use(this.spriteSheetSWalk4.sprites[0])
                                break;
                        } 
                    }
                    if (kb.wasPressed(Input.Keys.S) || kb.wasPressed(Input.Keys.Down)  || controller.at(0).getAxes(Input.Axes.LeftStickY) > 0.5) {
                        if(this.charId == 0){ this.charId = 1} 
                        this.charId--
                        switch(this.charId){
                            case 0: 
                                this.graphics.use(this.spriteSheetSWalk1.sprites[0])
                                break;
                            case 1:
                                this.graphics.use(this.spriteSheetSWalk2.sprites[0])
                                break;
                            case 2:
                                this.graphics.use(this.spriteSheetSWalk3.sprites[0])
                                break;
                            case 3:
                                this.graphics.use(this.spriteSheetSWalk4.sprites[0])
                                break;
                        }
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
                        if(this.charId >= 3){ this.charId = -1} 
                        this.charId++
                        switch(this.charId){
                            case 0: 
                                this.graphics.use(this.spriteSheetSWalk1.sprites[0])
                                break;
                            case 1:
                                this.graphics.use(this.spriteSheetSWalk2.sprites[0])
                                break;
                            case 2:
                                this.graphics.use(this.spriteSheetSWalk3.sprites[0])
                                break;
                            case 3:
                                this.graphics.use(this.spriteSheetSWalk4.sprites[0])
                                break;
                        } 
                    }
                    if (kb.wasPressed(Input.Keys.K) || kb.wasPressed(Input.Keys.Down)  || controller.at(1).getAxes(Input.Axes.LeftStickY) > 0.5) {
                        if(this.charId == 0){ this.charId = 1} 
                        this.charId--
                        switch(this.charId){
                            case 0: 
                                this.graphics.use(this.spriteSheetSWalk1.sprites[0])
                                break;
                            case 1:
                                this.graphics.use(this.spriteSheetSWalk2.sprites[0])
                                break;
                            case 2:
                                this.graphics.use(this.spriteSheetSWalk3.sprites[0])
                                break;
                            case 3:
                                this.graphics.use(this.spriteSheetSWalk4.sprites[0])
                                break;
                        }
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
    this.graphics.use(this.pickupAnim);
    const timer = new Timer({
      fcn: () => (this.interactTimer = false, this.graphics.use(this.spriteSheetSWalk1.sprites[1])),
      repeats: false,
      interval: 2000,
    });

    this.game.currentScene.add(timer);

    timer.start();
    console.log(this.interactTimer);
  }
}
