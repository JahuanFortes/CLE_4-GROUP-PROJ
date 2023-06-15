import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import block from '../images/Sprite-0002-rock.png'
import mapImage from "../images/map.jpg"
import testButton from "../images/test-button.png"
import fontFile from "../css/PressStart2P-Regular.ttf";
const font = new FontFace("PressStart2P-Regular", `url(${fontFile})`);
document.fonts.add(font);
font.load();
const Resources = {
    Fish: new ImageSource(fishImage),
    block: new ImageSource(block),
    Map: new ImageSource(mapImage),
    TestButton: new ImageSource(testButton)
}
const ResourceLoader = new Loader([Resources.Fish, Resources.block,Resources.Map, Resources.TestButton])

export { Resources, ResourceLoader };
