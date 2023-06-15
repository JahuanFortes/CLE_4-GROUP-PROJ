import { Actor, Engine, Vector, DisplayMode, CollisionType } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { TitleScreen } from "./scenes/titlescreen";
import { testingground } from "./scenes/testingground";


export class IngameButton extends Actor {
    x;
    y;
    player;
    isPressed1 = false;
    isPressed2 = false;
    buttonId;
    scene;
    game;
    sprite;
    constructor(x, y,  buttonId, scene, image) {
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
        this.sprite = image;

        this.pointer.useGraphicsBounds = true
    }


    onInitialize(engine) {
        console.log("Nuts")
        this.game = engine;
        this.graphics.use(this.sprite);
        this.on('collisionstart', () => this.wasPressed());
    }

    deleteWall() {

    }

    wasPressed(event) {

        switch (this.buttonId){
            case 1:
                if (this.scene.player.interactTimer === true) {
                    this.isPressed1 = true;
                    console.log('im pressed');
                }
                if (this.scene.player.interactTimer === false) {
                    this.isPressed1 = false;
                    console.log('not pressed');
                }
                break
            case 2:
                if (this.scene.player2.interactTimer === true) {
                    this.isPressed2 = true;
                    console.log('im pressed');
                }
                if (this.scene.player2.interactTimer === false) {
                    this.isPressed2 = false;
                    console.log('not pressed');
                }
        }
    }

}