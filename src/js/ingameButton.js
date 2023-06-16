import { Actor, Engine, Vector, DisplayMode, CollisionType } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { TitleScreen } from "./scenes/titlescreen";
import { testingground } from "./scenes/testingground";


export class IngameButton extends Actor {
    x;
    y;
    player;
    openDoor = false;
    buttonId;
    scene;
    game;
    sprite;
    constructor(x, y,  buttonId, scene) {
        super({
            width: 32,
            height: 20,
            collisionType: CollisionType.Passive,

        });
        this.x = x;
        this.y = y;
        this.pos = new Vector(this.x, this.y);
        this.buttonId = buttonId;
        this.scene = scene;
        this.sprite = Resources.TestButton.toSprite();

        this.pointer.useGraphicsBounds = true
    }


    onInitialize(engine) {
        console.log("Nuts")
        this.game = engine;
        this.graphics.use(this.sprite);
        this.on('collisionstart', () => this.isPressed());
        this.on('collisionend', () => this.wasPressed());


    }



    isPressed(event) {
        if (this.buttonId === this.scene.player.playerId) {
            this.openDoor = true;
            console.log(this.openDoor)
        }
        if (this.buttonId === this.scene.player2.playerId) {
            this.openDoor = true;
            console.log(this.openDoor)

        }



   }
    wasPressed(event) {
        if (this.buttonId === this.scene.player.playerId) {
            this.openDoor = false;
            console.log(this.openDoor)
        }
        if (this.buttonId === this.scene.player2.playerId) {
            this.openDoor = false;
            console.log(this.openDoor)

        }
    }


}