

import { Actor, Engine, Vector, Label, Font, Color, Random, Input, CollisionType, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, randomInRange, Physics} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player.js'
import { IngameButton } from "../ingameButton.js";
import { Wall } from "../wall.js";
import { Box } from "../box.js"
import {MovableObject} from "../movableObject.js";

export class Level1 extends Scene {
    game;
    userInterface;
    character;
    colliding = CollisionType.Fixed;
    constructor() {

        super({ width: 1280, height: 720, })


    }

}