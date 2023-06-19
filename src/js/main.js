import "../css/style.css";
import { Actor, Engine, Vector, DisplayMode, Color } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { TitleScreen } from "./scenes/titlescreen";
import { testingground } from "./scenes/testingground";
import { character_select } from "./scenes/character_select";
import { Level1 } from "./scenes/game_lvl1.js";
import { Level2 } from "./scenes/game_lvl2.js"

export class Game extends Engine {
  constructor() {
    super({width: 1440, height: 900, displayMode: DisplayMode.FillScreen});
    this.showDebug(true);
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    this.addScene("titlescreen", new TitleScreen());
    this.addScene("Level1", new Level1());
    this.addScene("testingground", new testingground());
    this.addScene("character_select", new character_select());
    this.goToScene("character_select");
  }
  startLevel2() {
    this.addScene("Level2", new Level2());
    this.goToScene("Level2");
    console.log("level2 has started!")
  }
}

new Game();
