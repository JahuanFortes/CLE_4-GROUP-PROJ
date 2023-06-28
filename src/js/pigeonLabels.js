
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
            text: `These stones are\nlighter then feathers.\nTry to find your
way out maybe even\nuse your strenght
You are almost there.\nWork together!`,
            pos: new Vector( 1700,  1200),
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
            text: `Now that both of\nyou are here
I believe that\nyou know the
rest. But first\ni hid a tennisball\nfind it if\nyou can.2`,
            pos: new Vector( 1425,  1075),
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
            text: `I put your friend\naway try to\nhelp him get\nout of there!
You need him to\nget to the end
All these rooms\nhold your awnsers.`,
            pos: new Vector(1725 ,  -25),
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
            text: `Did you guys\nknow i get alot\nof my food in
this park. I live\nhere but sometimes
the footballers get\ntoo much for me\nMaybe you will\neven meet one!`,
            pos: new Vector(-1275, -550),
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
            text: `You did it,\nyou beat them.\nThank you!
I'm sorry for\nkeeping you here
you can leave now\nI just needed\nyou guys to\nunderstand my pain.`,
            pos: new Vector(1525, -330),
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
            text: `This field\nfor some reason,\nthere are always
coming flying things\nfrom this place,
it scares me\nmaybe i need to\nstart my villain\narc.`,
            pos: new Vector(-1075, 1075),
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




