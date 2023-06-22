import { Actor, BoundingBox, Camera, CollisionGroup, CollisionGroupManager, CollisionType, CompositeCollider, EdgeCollider, Shape, Vector, clamp } from "excalibur";
import { player } from "./player";

export class CustomCamera extends Actor{
    player1
    player2
    game
    scene    
    constructor(player1, scene){
        super({
        })
        this.player1 = player1
        this.scene = scene
        this.pos.x = this.player1.pos.x
        this.pos.y = this.player1.pos.y
    }
    onInitialize(engine) {
        this.game = engine
    }
    onPreUpdate(engine) {
        let distance = Vector.distance(this.player1.pos, this.scene.player2.pos)
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
       this.game.currentScene.camera.zoom = clamp(zoom, 0.2, 0.9)  
    }
}