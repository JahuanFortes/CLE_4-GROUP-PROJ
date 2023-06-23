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
import {PigeonLabels} from "./pigeonLabels.js";

export class Secret_sign extends Actor {

    standing = false;
    hasCollided = false;
    constructor(scene, x, y, pigeonType) {

        super({
            width: 100,
            height: 100

        })

        this.pos.x = x;
        this.pos.y = y;
        this.signDown = Resources.Signdown.toSprite()
        this.signUp = Resources.Signup.toSprite();
            this.graphics.use(this.signDown);
        this.scene = scene;
        this.scale = new Vector(2, 2);

        this.labelLocation = new Actor({collisionType: CollisionType.PreventCollision})
        this.labelLocation.graphics.use(Resources.Labellocation.toSprite());
        this.labelLocation.scale = new Vector(1, 1);
        this.labelLocation.pos = new Vector(this.pos.x - 1000, this.pos.y);
        this.labelLocation.z = 10;

        this.pigeonType = pigeonType;

    }


    onInitialize(engine) {
        this.on('collisionstart', () => this.isStanding());
        this.on('collisionend', () => this.isNotStanding());
    }

    isStanding() {
        this.hasCollided = true;
        this.graphics.use(this.signUp);
        this.standing = true;

    }

    isNotStanding() {
        this.graphics.use(this.signDown);
        this.standing = false;
    }


    onPreUpdate() {
        if (this.hasCollided === true) {
            if (this.standing && this.scene.player.interactTimer || this.standing && this.scene.player2.interactTimer) {
                this.scene.add(this.labelLocation);
                this.labelLocation.actions.moveTo(this.pos.x - 400, this.pos.y, 4000);
                if (this.labelLocation.pos.x === this.pos.x - 400 && this.labelLocation.pos.y === this.pos.y) {
                    this.scene.add(this.pigeonType);
                }

            } else if (this.standing === false) {
                this.pigeonType.kill();
                this.labelLocation.kill();
                this.labelLocation.pos = new Vector(this.pos.x - 1000, this.pos.y);
            }
        }




    }


}