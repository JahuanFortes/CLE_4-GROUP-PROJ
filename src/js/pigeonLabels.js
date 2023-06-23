
import {Actor, BaseAlign, Color, Font, FontUnit, Label, ScreenElement, TextAlign, Vector} from "excalibur";

export class PigeonLabels extends Actor {
    scene;
    constructor(secret) {
        super();
        this.secret = secret;

        this.pigeonLabel1 = new Label( {
            text: `This is pigeon poopers
This is a text test so ye a a
wow so bootifull
ouch idk if this is gona wolr
this is secret`,
            pos: new Vector(this.secret.pos.x - 400, this.secret.pos.y - 100),
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




