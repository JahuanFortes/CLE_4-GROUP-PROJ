import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import block from '../images/Sprite-0002-rock.png'
import mapImage from "../images/map.jpg"
import level1 from "../images/BgLevel1.jpg"
import level2 from "../images/Sprite-lvl2.png"
import level1test from "../images/BgLevel1New.jpg"
import realLevel from "../images/map-1.png"
import testButton from "../images/test-button.png"
import testButton2 from "../images/test-button-2.png"
import stone from "../images/stone.png"
import smallstone from "../images/smallStone.png"
import ending from "../images/endingLvl1.png"
import moveWall from "../images/level1WallMove.png"
import oneWall from "../images/level1Wall.png"
import fontFile from "../css/PressStart2P-Regular.ttf";
import click from "../sounds/click.wav"
import offclick from "../sounds/offclick.wav"
import opendoor from "../sounds/explosion.wav"
import characterSheet from "../images/character1.png"
import smb2 from "../smb2.mp3";
const font = new FontFace("PressStart2P-Regular", `url(${fontFile})`);
document.fonts.add(font);
font.load();
const Resources = {
    Fish: new ImageSource(fishImage),
    block: new ImageSource(block),
    Map: new ImageSource(mapImage),
    Level1: new ImageSource(level1),
    Level1Test: new ImageSource(level1test),
    realLevel: new ImageSource(realLevel),
    Level2: new ImageSource(level2),
    TestButton: new ImageSource(testButton),
    TestButton2: new ImageSource(testButton2),
    Stone: new ImageSource(stone),
    Movewall: new ImageSource(moveWall),
    Onewall: new ImageSource(oneWall),
    Smallstone: new ImageSource(smallstone),
    characterSheet: new ImageSource(characterSheet),
    smb2: new Sound(smb2),
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
