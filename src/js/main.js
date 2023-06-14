import "../css/style.css";
import { Actor, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { TitleScreen } from "./scenes/titlescreen";

export class Game extends Engine {
  constructor() {
    super({ width: 800, height: 600 });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    this.addScene("titlescreen", new TitleScreen());
    this.goToScene("titlescreen");
  }
}

new Game();
