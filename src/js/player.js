import { Actor, Input, Random, Vector } from "excalibur"
import { Resources } from "./resources"

export class player extends Actor {
    constructor(){
        super({width:100, height:100})
    }

    onInitialize(engine, scene){

        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("pointerup", (event) => {
            console.log(`je klikt op mario`)
            this.pos = new Vector(100,100)
            this.kill()
        });
    }
    onPreKill(scene){        
        console.log("goodbye, cruel world")    
        Resources.scream.play()
    }
    loadMicroGame(game){
        switch(game){
            case "game1":
                this.rand = new Random()

                this.graphics.use(Resources.dud.toSprite())
                this.pos = new Vector(this.rand.integer(100, 500), this.rand.integer(100,500)) 
                this.vel = new Vector(30, 0)

                this.enableCapturePointer = true
                this.pointer.useGraphicsBounds = true
                this.on("pointerup", (event) => {
                    console.log(`je klikt op mario`)
                    this.pos = new Vector(100,100)
                    this.kill()
                });
                break;
            case "game2":
                // voorbeeld tekstlabel
                let textField = new Label({
                    font: new Font({
                        family: "Sofia",
                        size: 32,
                        color: Color.red
                    })
                })
                textField.text = `PRESS ANY BUTTON`
                textField.pos = new Vector(20, 30)
                

                break;
            case "game3":
                this.graphics.use(Resources.smasnug.toSprite())
                this.scale = new Vector(4,2)
                this.pos = new Vector(400,300)
                break;
        }
    }
    onPreUpdate(engine) {
        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            Resources.gnome.play()
        }
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Up)) {
            Resources.gnome.play()
        }
    } 
}