import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import block from '../images/Sprite-0002-rock.png'
import mapImage from "../images/map.jpg"
import fontFile from "../css/PressStart2P-Regular.ttf";
import characterSheet from "../images/character1.png"
const font = new FontFace("PressStart2P-Regular", `url(${fontFile})`);
document.fonts.add(font);
font.load();
const Resources = {
    Fish: new ImageSource(fishImage),
    block: new ImageSource(block),
    Map: new ImageSource(mapImage),
    characterSheet: new ImageSource(characterSheet),
}
const ResourceLoader = new Loader([Resources.Fish, Resources.block,Resources.Map, Resources.characterSheet])

export { Resources, ResourceLoader };
