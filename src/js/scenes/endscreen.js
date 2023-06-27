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
  Direction,
} from "excalibur";
//import { Level1 } from "../scenes/game_lvl1.js";
import { Resources } from "../resources.js";

export class Endingscreen extends Scene {
  game;
  constructor() {
    super({ width: 1280, height: 720 });
  }

  onInitialize(engine) {
    this.game = engine;

    let bg = new Actor();
    bg.graphics.use(Resources.Backbroundstart.toSprite());
    bg.scale = new Vector(1.3, 1.3);
    bg.pos = new Vector(775, 480);
    bg.z = 0;

    //text field:
    // FontStyle("Press Start 2P");

    let bigText2 = new Label({
      text: `Thanks for playing  `,
      pos: new Vector(this.game.screen.drawWidth / 4.3, 200),
      font: new Font({
        family: "PressStart2P-Regular",
        size: 50,
        color: Color.White,
        unit: FontUnit.Px,
        strokeColor: Color.Black,
        lineWidth: 1,
        baseAlign: Direction.LeftToRight,
      }),
    });
    let logo = new Actor();
    logo.graphics.use(Resources.Logo.toSprite());
    logo.pos = new Vector(this.game.screen.drawWidth / 2, 450);

    this.add(bg);
    this.add(bigText2);
    this.add(logo);

    bigText2.actions.blink(200, 200, 10);
  }

  onPreUpdate(engine) {
    if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
      this.game.goToScene("character_select");
    }
  }
}
