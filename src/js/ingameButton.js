import { Actor, Engine, Vector, DisplayMode, CollisionType } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { TitleScreen } from "./scenes/titlescreen";
import { testingground } from "./scenes/testingground";
import { MovableObject } from "./movableObject.js";


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
        this.scale = new Vector(2, 2);

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
        Resources.Click.play();
        if (this.buttonId === this.scene.player.playerId) {
            this.openDoor = true;
            console.log("ara?")
        }
        if (this.buttonId === this.scene.player2.playerId) {
            this.openDoor = true;
            console.log("Oro?")
        }
        if (this.buttonId === this.scene.movableObject.objectId) {
            this.openDoor = true;
            console.log('wat')
        }
        if (this.buttonId === this.scene.moveStone.objectId) {
            this.openDoor = true;
            console.log('wow')
        }



   }
    wasPressed(event) {
        Resources.Offclick.play();
        if (this.buttonId === this.scene.player.playerId) {
            this.openDoor = false;
            console.log(this.openDoor)
        }
        if (this.buttonId === this.scene.player2.playerId) {
            this.openDoor = false;


        }
        if (this.buttonId === this.scene.movableObject.objectId) {
            this.openDoor = false;
            console.log('wat')
        }
        if (this.buttonId === this.scene.moveStone.objectId) {
            this.openDoor = false;
            console.log('wow')
        }

    }


}