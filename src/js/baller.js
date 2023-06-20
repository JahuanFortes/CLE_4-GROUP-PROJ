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
    PolygonCollider, CollisionGroupManager
} from "excalibur"
import { Resources } from "./resources"

export class Baller extends Actor {

    objectId;
    sprite;
    collision;
    isColliding = false;

    constructor(x, y, image, scene) {
        super({
            width: image.width,
            height: image.height
        })

        this.pos = new Vector(x, y);
        this.scene = scene;
        this.sprite = image;
        this.scale = new Vector(1, 1);
        this.body.collisionType = CollisionType.Active;


    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(this.sprite);


    }

    onPreUpdate(engine) {
        this.rotation = 0;
        if (this.pos.y < this.scene.ball.pos.y) {
            if (this.pos.x < this.scene.ball.pos.x) {
                this.actions.clearActions();
                this.actions.moveTo(new Vector(this.scene.ball.pos.x - 100, this.scene.ball.pos.y + 100), 200);
            } else {
                this.actions.clearActions();
                this.actions.moveTo(new Vector(this.scene.ball.pos.x + 100, this.scene.ball.pos.y + 100), 200);
            }


        } else {
            this.actions.meet(this.scene.ball, 100);
        }

    }

}