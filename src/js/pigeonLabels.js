
import {Actor, BaseAlign, Color, Font, FontUnit, Label, ScreenElement, TextAlign, Vector} from "excalibur";

export class PigeonLabels extends Actor {
    scene;
    constructor() {
        super();

        this.pigeonLabel1 = new Label( {
            text: `Wow you're in the Park!\nTry to help your\nfriend while reaching
The end! Use buttons\nTo reach new places 
And move stuff out\nthe way for ease`,
            pos: new Vector( - 1500,  - 525),
            z: 1000,
            font: new Font({
                family: "PressStart2P-Regular",
                size: 20,
                color: Color.White,
                unit: FontUnit.Px,
                strokeColor: Color.Black,
                lineWidth: 1,
            })
        })
        this.pigeonLabel2 = new Label( {
            text: `Did you know this park\nIS NOT A PARK\nYou will be stuck forever
Do not try to escape\nThey will find you
And ask you politely\nto come back`,
            pos: new Vector( 1400,  -600),
            z: 1000,
            font: new Font({
                family: "PressStart2P-Regular",
                size: 20,
                color: Color.White,
                unit: FontUnit.Px,
                strokeColor: Color.Black,
                lineWidth: 1,
            })
        })
        this.pigeonLabel3 = new Label( {
            text: `WOWOWOOWOWOWO\nWOOWOWOWOWOOW\nWOOWOWOWOWOW
WOWOWOWOWOWOW\nWOWOOWOWOWOW
WWOWOWOOWOWOW\nWOOWOWOWOWOWO`,
            pos: new Vector( 1800,  1200),
            z: 1000,
            font: new Font({
                family: "PressStart2P-Regular",
                size: 20,
                color: Color.White,
                unit: FontUnit.Px,
                strokeColor: Color.Black,
                lineWidth: 1,
            })
        })
        this.pigeonLabel4 = new Label( {
            text: `NONNONONONONONONON\nNONNONONONONONONON\nNONNONONONONONONON
NONNONONONONONONON\nNONNONONONONONONON
WNONNONONONONONONONW\nWOONONNONONONONONONON`,
            pos: new Vector( 1400,  1100),
            z: 1000,
            font: new Font({
                family: "PressStart2P-Regular",
                size: 20,
                color: Color.White,
                unit: FontUnit.Px,
                strokeColor: Color.Black,
                lineWidth: 1,
            })
        })
        this.pigeonLabel5 = new Label( {
            text: `YESYESYESYESYESYES\nYESYESYESYESYESYEN\nNYESYESYESYESYESYEONONONONON
YESYESYESYESYESYE\nNONYESYESYESYESYESYE
YESYESYESYESYESYE\nWOYESYESYESYESYESYEON`,
            pos: new Vector(1700 ,  0),
            z: 1000,
            font: new Font({
                family: "PressStart2P-Regular",
                size: 20,
                color: Color.White,
                unit: FontUnit.Px,
                strokeColor: Color.Black,
                lineWidth: 1,
            })
        })
        this.pigeonLabel6 = new Label( {
            text: `Now both of you are hereS\n n ow both of you are hereS\nNNow both of you are hereS
Now both of you are hereS\nNNow both of you are hereSE
Now both of you are hereSE\nWNow both of you are hereS`,
            pos: new Vector(-1300, -500),
            z: 1000,
            font: new Font({
                family: "PressStart2P-Regular",
                size: 20,
                color: Color.White,
                unit: FontUnit.Px,
                strokeColor: Color.Black,
                lineWidth: 1,
            })
        })
        this.pigeonLabel7 = new Label( {
            text: `LVL 3 epxlain\nLVL 3 epxlainereS\nNNow bLVL 3 epxlain
LVL 3 epxlainS\nNNoLVL 3 epxlain
LVL 3 epxlainE\nWNLVL 3 epxlain`,
            pos: new Vector(1550, -350),
            z: 1000,
            font: new Font({
                family: "PressStart2P-Regular",
                size: 20,
                color: Color.White,
                unit: FontUnit.Px,
                strokeColor: Color.Black,
                lineWidth: 1,
            })
        })
        this.pigeonLabel8 = new Label( {
            text: `LVL 3 adnomd\nLVL 3 ep 3 adnomdreS\nNNow bLV 3 adnomd 3 adnomd
 3 adnomdnE\n 3 adnomdpxlain`,
            pos: new Vector(-1100, 1100),
            z: 1000,
            font: new Font({
                family: "PressStart2P-Regular",
                size: 20,
                color: Color.White,
                unit: FontUnit.Px,
                strokeColor: Color.Black,
                lineWidth: 1,
            })
        })
    }
}




