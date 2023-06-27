import {Actor, BaseAlign, Color, Font, FontStyle, Label, TextAlign, vec, Vector, Input, FontUnit} from "excalibur";
import { player } from "./player.js";
import { Resources } from "./resources.js"
import json from "../js/info.json"
export class userInterface extends Actor {
    mainText
    scene
    timerText
    gameover
    constructor(scene, gameOver, sceneId) {
        super();
        this.scene = scene
        this.gameover = gameOver
        this.sceneId = sceneId
    }
    
    onInitialize(engine){
        if(this.sceneId == 1){
            this.charSelect()
        }
        else if(this.gameover == 1){
            this.gameOver()
        } else if(this.gameover == 2){
            this.explanation()
        } else {       
        this.timerText = new Label({
            pos: new Vector(200, 50),
            text: `Time remaining: 99`,
            font: new Font({
                family: 'arial',
                // style: FontStyle.Italic,
                size: 40,
                strokeColor: Color.Black,
                lineWidth: 2,
                bold: true,
                color: Color.White,
                baseAlign: BaseAlign.Top,
                textAlign: TextAlign.Center
                })
            })
        engine.add(this.timerText)
        }
    }
    timer(time){
        this.timerText = new Label({
            pos: new Vector(900, 50),
            text: `Time remaining: ${time}`,
            font: new Font({
                family: 'arial',
                // style: FontStyle.Italic,
                size: 40,
                strokeColor: Color.Black,
                lineWidth: 2,
                bold: true,
                color: Color.White,
                baseAlign: BaseAlign.Top,
                textAlign: TextAlign.Center
                })
            })
            this.scene.add(this.timerText)
            this.kill()
    }
    onPreUpdate(engine) {
    }
    gameOver(){
        this.gameOverText = new Label({
            pos: new Vector(600, 300),
            text: `Its all ogre now`,
            font: new Font({
                family: 'arial',
                // style: FontStyle.Italic,
                size: 40,
                strokeColor: Color.Black,
                lineWidth: 2,
                bold: true,
                color: Color.White,
                baseAlign: BaseAlign.Top,
                textAlign: TextAlign.Center
                })
            })
        this.restartText = new Label({
            pos: new Vector(600, 600),
            text: `Kill yoursef`,
            font: new Font({
                family: 'arial',
                // style: FontStyle.Italic,
                size: 40,
                strokeColor: Color.Black,
                lineWidth: 2,
                bold: true,
                color: Color.White,
                baseAlign: BaseAlign.Top,
                textAlign: TextAlign.Center
                })
            })
            this.scene.add(this.gameOverText)
            this.scene.add(this.restartText)
    }
    charSelect(){
        this.charSelect = new Label({
            pos: new Vector(425, 200),
            text: json.charselect[0],
            font: new Font({
                family: "PressStart2P-Regular",
                size: 30,
                color: Color.White,
                unit: FontUnit.Px,
                strokeColor: Color.Black,
                lineWidth: 1,
            }),
            })
        this.buttonSelect = new Label({
                pos: new Vector(275, 700),
                text: json.charselect[1],
            font: new Font({
                family: "PressStart2P-Regular",
                size: 35,
                color: Color.White,
                unit: FontUnit.Px,
                strokeColor: Color.Black,
                lineWidth: 1,
            }),
            })
        this.scene.add(this.charSelect)
        this.scene.add(this.buttonSelect)
        this.buttonSelect.actions.blink(300, 150, 100)
    }
    explanation(){

    }
}