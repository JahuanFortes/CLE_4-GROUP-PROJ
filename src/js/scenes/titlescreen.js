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
import { Level_1 } from "../scenes/game_lvl1";
import { Resources } from "../resources.js";

export class Text extends Scene {
  game;
  constructor() {
    super({ width: 800, height: 700 });
  }
  onInitialize(engine) {}
}
export class TitleScreen extends Scene {
  game;
  constructor() {
    super({ width: 800, height: 700 });
  }

  onInitialize(engine) {
    console.log("how to play");
    this.game = engine;
    const color = new Actor();
    color.graphics.use(Resources.Color.toSprite());
    color.pos = new Vector(500, 400);
    color.scale = new Vector(3, 3);
    this.add(color);

    //text field:
    let bigText1 = new Label({
      text: "HeadphoneActor",
      pos: new Vector(90, 100),
      font: new Font({
        family: "Biome",
        size: 80,
        color: Color.White,
        unit: FontUnit.Px,
      }),
    });

    let bigText2 = new Label({
      text: "Press SPACE, W or UP to JUMP!",
      pos: new Vector(110, 200),
      font: new Font({
        family: "Biome",
        size: 37,
        color: Color.White,
        unit: FontUnit.Px,
      }),
    });

    let textField2 = new Label({
      text: "Press SPACE to play",
      pos: new Vector(90, 250),
      font: new Font({
        family: "Biome",
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
