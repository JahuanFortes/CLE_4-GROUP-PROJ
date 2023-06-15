import "../css/style.css";
import { Actor, Engine, Vector, DisplayMode } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { TitleScreen } from "./scenes/titlescreen";
import { testingground } from "./scenes/testingground";

export class Game extends Engine {
  constructor() {
    super({width: 1440, height: 900, displayMode: DisplayMode.FillScreen});
    this.showDebug(true);
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    this.addScene("titlescreen", new TitleScreen());
    this.addScene("testingground", new testingground());
    this.goToScene("testingground");
  }
}

new Game();
