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
let width;
let heigth;
export class Leaves extends Actor {

    standing = false;
    points = 0;
    leafId = 0;
    constructor(scene) {

        super({
            width: width,
            height: heigth
        })

        this.sprite = Resources.Leaf.toSprite();
        this.scale = new Vector(2, 2);
        width = this.sprite.width;
        heigth = this.sprite.height
        this.scene = scene;

    }


    onInitialize(engine) {
        this.graphics.use(this.sprite);
        this.rand = new Random();
        this.pos = new Vector(
            this.rand.integer(this.width, (Resources.realLevel3.width - this.width) * 1.8),
            this.rand.integer(this.height, (Resources.realLevel3.height - this.height) * 1.8)
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
            if (this.points++) {
                this.scene.player.interactTimer = false;
                this.scene.player2.interactTimer = false;
                this.scene.leafPoints--
            }
            console.log(this.scene.leafPoints)
        }
    }


}