import { ImageSource, Sound, Resource, Loader } from "excalibur";
import fishImage from "../images/fish.png";
import mapImage from "../images/map.jpg"
import fontFile from "../css/PressStart2P-Regular.ttf";
const font = new FontFace("PressStart2P-Regular", `url(${fontFile})`);
document.fonts.add(font);
font.load();
const Resources = {
  Fish: new ImageSource(fishImage),
  Map: new ImageSource(mapImage)
};
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Map
]);

export { Resources, ResourceLoader };
