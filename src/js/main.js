import "../css/style.css";
import { Actor, Engine, Vector, DisplayMode, CollisionGroupManager, CollisionGroup, Color } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { TitleScreen } from "./scenes/titlescreen";
import { testingground } from "./scenes/testingground";
import { character_select } from "./scenes/character_select";
import { Level1 } from "./scenes/game_lvl1.js";
import { Level2 } from "./scenes/game_lvl2.js"
import { Level3 } from "./scenes/game_lvl3.js"
import { Level4 } from "./scenes/game_lvl4.js"

export class Game extends Engine {
  constructor() {
    super({width: 1440, height: 900, displayMode: DisplayMode.FillScreen});
    this.showDebug(false);
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    this.addScene("titlescreen", new TitleScreen());
    this.addScene("Level1", new Level1());
    this.addScene("Level2", new Level2());
    this.addScene("testingground", new testingground());
    this.addScene("character_select", new character_select());
    this.addScene("Level3", new Level3())
    this.goToScene("titlescreen");
  }
  startLevel2() {
    // this.addScene("Level2", new Level2());
    this.goToScene("Level2");
    console.log("level2 has started!")
  }
  startLevel3() {
    this.goToScene("Level3");
    console.log("level3 has started!");
  }
}


new Game();
