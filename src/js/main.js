import "../css/style.css";
import { Actor, Engine, Vector, DisplayMode } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { TitleScreen } from "./scenes/titlescreen";
import { testingground } from "./scenes/testingground";
import { character_select } from "./scenes/character_select";
export class Game extends Engine {
  constructor() {
    super({width: 1440, height: 900, displayMode: DisplayMode.FillScreen});
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    this.addScene("titlescreen", new TitleScreen());
    this.addScene("testingground", new testingground());
    this.addScene("character_select", new character_select());
    this.goToScene("character_select");
  }
}

new Game();
