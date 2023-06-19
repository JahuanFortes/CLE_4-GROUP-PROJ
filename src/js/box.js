import { Actor, Input, Random, Vector, clamp, Timer, EdgeCollider, CollisionType } from "excalibur"
import { Resources } from "./resources"

export class Box extends Actor {
    constructor(x, y, w, h) {
        super({
            width: w, // hitbox
            height: h,
            collisionType: CollisionType.Fixed,
        });
        this.pos = new Vector(x, y);
    }
    onInitialize(engine) {
        this.graphics.anchor = new Vector(0, 0);
        this.scale = new Vector(1, 1);
    }

}