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
        this.actions.meet(this.scene.ball, 150)
    }

    onPreUpdate(engine) {
        this.rotation = 0;
    }

}