import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import block from '../images/Sprite-0002-rock.png'
import mapImage from "../images/map.jpg"
import background from "../images/bg.jpg"
import level1 from "../images/BgLevel1.jpg"
import realLevel from "../images/BgLevel1New.jpg"
import testButton from "../images/test-button.png"
import testButton2 from "../images/test-button-2.png"
import stone from "../images/stone.png"
import moveWall from "../images/level1WallMove.png"
import smallstone from "../images/smallStone.png"
import ending from "../images/endingLvl1.png"
import fontFile from "../css/PressStart2P-Regular.ttf";
import click from "../sounds/click.wav"
import offclick from "../sounds/offclick.wav"
import opendoor from "../sounds/explosion.wav"
import characterSheet from "../images/character1.png"
const font = new FontFace("PressStart2P-Regular", `url(${fontFile})`);
document.fonts.add(font);
font.load();
const Resources = {
    Fish: new ImageSource(fishImage),
    block: new ImageSource(block),
    Map: new ImageSource(mapImage),
    Bg: new ImageSource(background),
    Level1: new ImageSource(level1),
    realLevel: new ImageSource(realLevel),
    TestButton: new ImageSource(testButton),
    TestButton2: new ImageSource(testButton2),
    Stone: new ImageSource(stone),
    Onewall: new ImageSource(moveWall),
    characterSheet: new ImageSource(characterSheet),
    Smallstone: new ImageSource(smallstone),
    Ending: new ImageSource(ending),

    Click: new Sound(click),
    Offclick: new Sound(offclick),
    Opendoor: new Sound(opendoor)
}
// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }
