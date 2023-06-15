import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import block from '../images/Sprite-0002-rock.png'
import mapImage from "../images/map.jpg"
import testButton from "../images/test-button.png"
import testButton2 from "../images/test-button-2.png"
import fontFile from "../css/PressStart2P-Regular.ttf";
const font = new FontFace("PressStart2P-Regular", `url(${fontFile})`);
document.fonts.add(font);
font.load();
const Resources = {
    Fish: new ImageSource(fishImage),
    block: new ImageSource(block),
    Map: new ImageSource(mapImage),
    TestButton: new ImageSource(testButton),
    TestButton2: new ImageSource(testButton2)
}
// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }
