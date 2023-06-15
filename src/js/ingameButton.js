import { Actor, Engine, Vector, DisplayMode, CollisionType } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { TitleScreen } from "./scenes/titlescreen";
import { testingground } from "./scenes/testingground";


export class IngameButton extends Actor {
    x;
    y;
    player;
    isPressed;
    id;
    constructor(x, y, player, id) {
        super({
            width: 32,
            height: 20,
            collisionType: CollisionType.Fixed,

        });
        this.x = x;
        this.y = y;
        this.pos = new Vector(this.x, this.y);
        this.player = player;
        this.id = id;
        this.graphics.use(Resources.TestButton.toSprite())
    }


    onInitialize(engine) {
        this.on('collisionstart', () => this.wasPressed());
    }

    wasPressed(event) {

        switch (this.id){
            case 1:
                if (this.player.interactTimer === true) {
                    this.isPressed = true;
                    console.log('im pressed');
                }
                if (this.player.interactTimer === false) {
                    this.isPressed = false;
                    console.log('not pressed');
                }
                break
            case 2:
                if (this.player.interactTimer === true) {
                    this.isPressed = true;
                    console.log('im pressed');
                }
                if (this.player.interactTimer === false) {
                    this.isPressed = false;
                    console.log('not pressed');
                }
        }
    }
}