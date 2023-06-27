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
    PolygonCollider, CollisionGroupManager, SpriteSheet, Animation, range
} from "excalibur"
import { Resources } from "./resources"

export class Baller extends Actor {

    objectId;
    sprite;
    collision;
    isColliding = false;

    constructor(x, y, image, scene) {
        super({
            width: 52/4,
            height: 19
        })

        this.pos = new Vector(x, y);
        this.scene = scene;
        this.sprite = image;
        this.scale = new Vector(4, 4);
        this.body.collisionType = CollisionType.Active;

    }

    onInitialize(engine) {
        this.game = engine;
        this.graphics.use(this.sprite);


        this.enemyOne = SpriteSheet.fromImageSource({
            image: Resources.Enemy1WalkSheet,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: 52/4,
                spriteHeight: 19,
            }
        })
        this.enemyTwo = SpriteSheet.fromImageSource({
            image: Resources.Enemy2WalkSheet,
            grid: {
                rows: 1,
                columns: 4,
                spriteWidth: 52/4,
                spriteHeight: 19,
            }
        })


        this.idleOne = Animation.fromSpriteSheet(this.enemyOne, range(0,3), 200);
        this.idletwo = Animation.fromSpriteSheet(this.enemyOne, range(0,3), 200);

    }

    onPreUpdate(engine) {
        this.graphics.use(this.idleOne);
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