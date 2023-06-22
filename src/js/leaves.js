import {
    Actor,
    Input,
    Random,
    Vector,
    clamp,
    Timer,
    EdgeCollider,
    CollisionType,
    Color,
    PolygonCollider
} from "excalibur"
import { Resources } from "./resources"
import {MovableObject} from "./movableObject.js";

export class Leaves extends Actor {

    standing = false;

    leafId = 0;
    constructor(scene) {

        super({
            width: 50,
            height: 50

        })

        this.sprite = Resources.Leaf.toSprite();

        this.scene = scene;

    }


    onInitialize(engine) {
        this.graphics.use(this.sprite);
        this.rand = new Random();
        this.rotation = Math.PI * this.rand.integer(0, 1);

        this.pos = new Vector(
            this.rand.integer(this.width, (Resources.realLevel3.width - this.width) * 1.8),
            this.rand.integer(this.height, (Resources.realLevel3.height - this.height) * 1.5)
        );
        this.on('collisionstart', () => this.isStanding());
        this.on('collisionend', () => this.isNotStanding());
    }

    isStanding() {
        this.standing = true;

    }

    isNotStanding() {
        this.standing = false;
    }

    onPreUpdate(engine) {
        if (this.standing && this.scene.player.interactTimer || this.standing && this.scene.player2.interactTimer) {

            this.scene.leafPoints++
            this.kill();
            if (this.scene.leafPoints++) {
                this.scene.player.interactTimer = false;
                this.scene.player2.interactTimer = false;
                this.scene.leafPoints--
            }
            console.log(this.scene.leafPoints)
        }
    }


}