import "../css/style.css";
import { Actor, Engine, Vector, DisplayMode } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { TitleScreen } from "./scenes/titlescreen";
import { Level1 } from "./scenes/game_lvl1.js";

export class Game extends Engine {
  constructor() {
    super({width: 1440, height: 900, displayMode: DisplayMode.FillScreen});
    this.showDebug(true);
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    this.addScene("titlescreen", new TitleScreen());
    this.addScene("Level1", new Level1());
    this.goToScene("Level1");
  }
  startLevel2() {
    // this.addScene("Level2", new Level2());
    // this.goToScene("Level2");
    console.log("level2 has started!")
  }
}

new Game();
