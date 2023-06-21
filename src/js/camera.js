import { Actor, BoundingBox, Camera, CollisionGroup, CollisionGroupManager, CollisionType, CompositeCollider, EdgeCollider, Shape, Vector, clamp } from "excalibur";
import { player } from "./player";
//import { vector } from "excalibur/build/dist/Util/DrawUtil";

export class CustomCamera extends Actor{
    player1
    player2
    CustomCameraGroup
    game    
    constructor(player1, player2){
        const cameraEdge = new CompositeCollider([
            Shape.Box(700,1000),
        ])
        const innerEdge = new CompositeCollider([
            Shape.Box (400,400),
        ])
        let CameraCanCollideWith = CollisionGroup.collidesWith([
            "Player"
        ])
        super({
            width: 600,
            height: 400,
            //collider: cameraEdge,
        })
        //cameraEdge.collisionType = CollisionType.PreventCollision
        this.player1 = player1
        this.player2 = player2
        this.CollisionGroup = CameraCanCollideWith
        this.pos.x = 400
        this.pos.y = 100
        console.log(player1.pos)
        console.log(player2.pos)
        //this.body.collisionType = CollisionType.Passive;
        
    }
    onInitialize(engine) {
        console.log("Double Nuts")
        this.game = engine ?? 0;
        //this.game.currentScene.camera.strategy.lockToActor(this.player)
        this.graphics.use(this.sprite);
        console.log(this.player1.scene)
        console.log(this.player2.scene)
        console.log(this)
        this.on('collisionstart', () => this.moveCamera());
        //this.on('precollision', () => this.moveCamera())
        this.on('collisionend', () => this.stopCamera());
    }
    moveCamera(){
        /*
        this.vel.x = this.player1.vel.x
        this.vel.y = this.player1.vel.y
        this.vel.x = this.player2.vel.x
        this.vel.y = this.player2.vel.y
        */
        console.log("MOVING")
    }
    stopCamera(){
        //Do nothing?
        this.vel.x = 0
        this.vel.y = 0
       if(CollisionGroup == 'player'){
        console.log("test")
       }
       
    }
    collides() {
        this.isColliding = true;
    }
    onPreUpdate(engine) {/*
        console.log("player 1 pos y" + this.player1.pos.y)
        console.log("player 1 pos x" + this.player1.pos.x)
        console.log("player 2 pos y" + this.player2.pos.y)
        console.log("player 2 pos x" + this.player2.pos.x)
        console.log("camera pos y" + this.pos.y)
        console.log("camera pos x" + this.pos.x)
*/
        let distance = Vector.distance(this.player1.pos, this.player2.pos)
       // console.log(distance)
        this.pos.x = this.player1.pos.x
        this.pos.y = this.player1.pos.y
        /*
        if(distance >= 900){
            
            this.game.currentScene.camera.zoom = 0.5
        } 
        else
        {
            this.game.currentScene.camera.zoom = 1.0
        }
        */
       let zoom = 600 / distance
       console.log(zoom)
        this.game.currentScene.camera.zoom = clamp(zoom, 0.2, 0.9)  
    }
}