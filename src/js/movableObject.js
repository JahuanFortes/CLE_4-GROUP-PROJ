import {Actor, Input, Random, Vector, clamp, Timer, EdgeCollider, CollisionType, Color} from "excalibur"
import { Resources } from "./resources"

export class MovableObject extends Actor {
    objectId;
    sprite;
    collision;
    isColliding = false;
    constructor(objectId, image, collision, x, y) {
        super({
            width: image.width,
            height: image.height
        })

        this.pos = new Vector(x, y);

        this.objectId = objectId;
        this.collision = collision;
        this.sprite = image;
        this.body.collisionType = this.collision;


    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(this.sprite);
        this.on('collisionstart', () => this.collides());
    }

    collides() {
        this.isColliding = true;
    }


    onPreUpdate(engine) {
        this.pos.x = clamp(this.pos.x, this.width/2, engine.drawWidth - this.width/2);
        this.pos.y = clamp(this.pos.y, this.height/2, engine.drawHeight - this.height/2);
        if (this.vel.x > 0) {
            this.vel.x -= 5
        }
        if (this.vel.x < 0) {
            this.vel.x += 5
        }
        if (this.vel.y > 0) {
            this.vel.y -= 5
        }
        if (this.vel.y < 0) {
            this.vel.y += 5
        }

        if (this.body.angularVelocity > 0) {
            this.body.angularVelocity -= 0.02
        }
        if (this.body.angularVelocity < 0) {
            this.body.angularVelocity += 0.02
        }


        if (this.vel.x < 5 && this.vel.x > -5) {
            this.vel.x = 0
        }
        if (this.vel.y < 5 && this.vel.y > -5) {
            this.vel.y = 0
        }
        if (this.body.angularVelocity < 0.02 && this.body.angularVelocity > -0.02) {
            this.body.angularVelocity = 0
        }

    }


}