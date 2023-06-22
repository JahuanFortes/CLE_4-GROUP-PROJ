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
        //dont rotate the baller on collision
        this.rotation = 0;
        //check if baller is lower then the ball
        if (this.pos.y < this.scene.ball.pos.y) {
            //if he is to the left and on the bottom of ball
            if (this.pos.x < this.scene.ball.pos.x) {
                //move left and under
                this.actions.clearActions();
                this.actions.moveTo(new Vector(this.scene.ball.pos.x - 100, this.scene.ball.pos.y + 100), 300);
            } else {
                //move to right and under
                this.actions.clearActions();
                this.actions.moveTo(new Vector(this.scene.ball.pos.x + 100, this.scene.ball.pos.y + 100), 300);
            }

        //if he is under already, just follow/push the ball
        } else {
            this.actions.meet(this.scene.ball, 200);
        }

    }

}