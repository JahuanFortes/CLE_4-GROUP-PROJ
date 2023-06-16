
import { Actor, Input, Random, Vector, clamp, Timer, EdgeCollider, CollisionType } from "excalibur"
import { Resources } from "./resources"

export class Wall extends Actor {
    waall;
    constructor(startX, startY, endX, endY) {
        super()

        this._setName('wall')

        this.pos = new Vector(0, 0)

        this.waall = new EdgeCollider({
            begin: new Vector(startX, startY),
            end: new Vector(endX, endY),
        })
        this.collider.set(this.waall);
        this.body.collisionType = CollisionType.Fixed;

    }

    onInitialize(engine) {
        this.game = engine;

    }


}