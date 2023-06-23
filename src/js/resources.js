import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import signup from '../images/sign.png'
import signdown from '../images/sign_down.png'
import labellocation from '../images/pigeon.png'
import block from '../images/Sprite-0002-rock.png'
import mapImage from "../images/map.jpg"
import background from "../images/bg.jpg"
import level1 from "../images/BgLevel1.jpg"
import level2 from "../images/BgLevel2New.jpg";
import realLevel from "../images/BgLevel1New.jpg"
import realLevel3 from "../images/BgLevel3New.jpg"
import bgtest from "../images/bgtest.jpg"
import testButton from "../images/test-button.png"
import testButton2 from "../images/test-button-2.png"
import stone from "../images/stone.png"
import moveWall from "../images/level1WallMove.png"
import moveRock from "../images/level1rockMove.png"
import football from "../images/football.png"
import fence from "../images/fence.png"
import smallstone from "../images/smallStone.png"
import ending from "../images/endingLvl1.png"
import fontFile from "../css/PressStart2P-Regular.ttf";
import leaf from "../images/leaf.png"
import click from "../sounds/click.wav"
import offclick from "../sounds/offclick.wav"
import opendoor from "../sounds/explosion.wav"
import characterSheet from "../images/character1.png"
import characterFWalkSheet from "../images/BASE_character F_walk sprite.png"
import CharacterSWalkSheet from "../images/BASE_character S_walk sprite.png"
const font = new FontFace("PressStart2P-Regular", `url(${fontFile})`);
document.fonts.add(font);
font.load();
const Resources = {
    Signup: new ImageSource(signup),
    Signdown: new ImageSource(signdown),
    Labellocation: new ImageSource(labellocation),
    Fish: new ImageSource(fishImage),
    block: new ImageSource(block),
    Map: new ImageSource(mapImage),
    Bg: new ImageSource(background),
    Football: new ImageSource(football),
    Level1: new ImageSource(level1),
    Bgtest: new ImageSource(bgtest),
    realLevel: new ImageSource(realLevel),
    realLevel3: new ImageSource(realLevel3),
    TestButton: new ImageSource(testButton),
    TestButton2: new ImageSource(testButton2),
    Stone: new ImageSource(stone),
    Leaf: new ImageSource(leaf),
    Onewall: new ImageSource(moveWall),
    Moverock: new ImageSource(moveRock),
    Fence: new ImageSource(fence),
    characterSheet: new ImageSource(characterSheet),
    Smallstone: new ImageSource(smallstone),
    Ending: new ImageSource(ending),
    Level2: new ImageSource(level2),
    Click: new Sound(click),
    Offclick: new Sound(offclick),
    Opendoor: new Sound(opendoor),
    CharacterSWalkSheet: new ImageSource(CharacterSWalkSheet),
    CharacterFWalkSheet: new ImageSource(characterFWalkSheet,)
}
// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = [];
for (const key in Resources) {
  resourceArray.push(Resources[key]);
}
const ResourceLoader = new Loader(resourceArray);
export { Resources, ResourceLoader };
