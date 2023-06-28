import {
  Scene,
  Actor,
  Engine,
  Vector,
  Label,
  Color,
  Font,
  Input,
  FontUnit,
  FontStyle,
} from "excalibur";
//import { Level1 } from "../scenes/game_lvl1.js";
import { Resources } from "../resources.js";


export class TitleScreen extends Scene {
  game;
  constructor() {
    super({ width: 1280, height: 720 });
  }

  onInitialize(engine) {
    console.log("how to play");
    this.game = engine;

    let bg = new Actor();
    bg.graphics.use(Resources.Backbroundstart.toSprite());
    bg.scale = new Vector(1.3, 1.3);
    bg.pos = new Vector(775, 480);
    bg.z = 0;

    //text field:
    // FontStyle("Press Start 2P");


    let logo = new Actor();
    logo.graphics.use(Resources.Logo.toSprite());
    logo.pos = new Vector(this.game.screen.drawWidth / 2, 250);


    let bigText2 = new Label({
      text: `Explore the park and reach new places!
      Maybe even have a 'fight' :0`,
      pos: new Vector(this.game.screen.drawWidth / 8, 500),
      font: new Font({
        family: "PressStart2P-Regular",
        size: 30,
        color: Color.White,
        unit: FontUnit.Px,
        strokeColor: Color.Black,
        lineWidth: 1,
      }),
    });

    let textField2 = new Label({
      text: "Press SPACE to play",
      pos: new Vector(this.game.screen.drawWidth / 3.1, 800),
      font: new Font({
        family: "PressStart2P-Regular",
        size: 35,
        color: Color.White,
        unit: FontUnit.Px,
        strokeColor: Color.Black,
        lineWidth: 1,
      }),
    });
    this.add(bg);
    this.add(logo);
    this.add(bigText2);
    this.add(textField2);
    textField2.actions.blink(200, 200, 10);
  }

  onPreUpdate(engine) {
    if (engine.input.keyboard.wasPressed(Input.Keys.Space) || engine.input.gamepads.at(0).isButtonPressed(Input.Buttons.Start) || engine.input.gamepads.at(1).isButtonPressed(Input.Buttons.Start)) {
      this.game.goToScene("character_select");
    }
  }
}
