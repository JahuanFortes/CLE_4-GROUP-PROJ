import {Actor, Input, Random, Vector, clamp, Timer, EdgeCollider, CollisionType, Color} from "excalibur"
import { Resources } from "./resources"

export class MovableObject extends Actor {
    objectId;
    constructor(objectId) {
        super({ collisionType: CollisionType.Active, width: 50, height: 50, color: Color.Red})

        this.pos = new Vector(500, 130);
        this.body.friction = 0.99;
        this.body.bounciness = 0.01;
        this.objectId = objectId;
        this.body.useGravity = true;



    }

    onInitialize(engine) {
        this.game = engine;

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