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
} from "excalibur";

import { Resources } from "../resources.js";

export class Text extends Scene {
  game;

  constructor() {
    super({width: 1280, height: 720});
  }

  onInitialize(engine) {
    //text field:
    let bigText1 = new Label({
      text: "HeadphoneActor",
      pos: new Vector(90, 100),
      font: new Font({
        family: "Press Start 2P",
        size: 80,
        color: Color.White,
        unit: FontUnit.Px,
      }),
    });

    let bigText2 = new Label({
      text: "Press SPACE, W or UP to JUMP!",
      pos: new Vector(110, 200),
      font: new Font({
        family: "Roboto",
        size: 37,
        color: Color.White,
        unit: FontUnit.Px,
      }),
    });

    let textField2 = new Label({
      text: "Press SPACE to play",
      pos: new Vector(90, 250),
      font: new Font({
        family: "Roboto",
        size: 20,
        color: Color.White,
        unit: FontUnit.Px,
      }),
    });
    this.add(bigText1);
    this.add(bigText2);
    this.add(textField2);
    textField2.actions.blink(200, 200, 10);
    this.game.addScene("game", new Main());
  }


  onPreUpdate(engine) {
    if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
      this.game.goToScene("game");
    }

  }
}
