import "../css/style.css";
import { Actor, Engine, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Text } from "./scenes/titlescreen";

export class Game extends Engine {
  constructor() {
    super({ width: 1280, height: 720 });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    this.addScene("titlescreen", new Text());
    this.goToScene("titlescreen");
  }
}

new Game();
