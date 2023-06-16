import {Actor, BaseAlign, Color, Font, FontStyle, Label, TextAlign, vec, Vector, Input} from "excalibur";
import { player } from "./player.js";
import { Resources } from "./resources.js"
export class userInterface extends Actor {
    mainText
    scene
    timerText
    gameover
    constructor(scene, gameOver) {
        super();
        this.scene = scene
        this.gameover = gameOver
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
    }
    
    onInitialize(engine){
        if(this.gameover == 1){
            this.gameOver()
        } else if(this.gameover == 2){
            this.explanation()
        } else {       
        //console.log(this.gameName)
        //this.textChanger(engine, this.gameName)
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
    explanation(){

    }
}