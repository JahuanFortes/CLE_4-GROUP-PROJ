import {BaseAlign, Color, Font, FontUnit, Label, ScreenElement, TextAlign} from "excalibur";

export class Fonts extends ScreenElement {
    font;
    font2;
    font3;
    constructor() {
        super();
        this.font = new Font({
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
        this.font2 = new Font({
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

        this.font3 = new Font({
            family: "PressStart2P-Regular",
            size: 20,
            color: Color.White,
            unit: FontUnit.Px,
            strokeColor: Color.Black,
            lineWidth: 1,
        })
    }
}