import {ImageSource, Sound, Resource, Loader, Color} from 'excalibur'
import logo from "../images/logo.png"
import start from "../images/startButton.png"
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
import backgroundstart from "../images/BgLevel4New.jpg"
import bgtest from "../images/bgtest.jpg"
import testButton from "../images/test-button.png"
import testButton2 from "../images/test-button-2.png"
import stone from "../images/stone.png"
import moveWall from "../images/level1WallMove.png"
import moveRock from "../images/level1rockMove.png"
import tree from "../images/tree.png"
import lvl2moveWall from "../images/level2Room1Move.png"
import lvl2moveWalltwo from "../images/level2WallMove.png"
import lvl2MoveRoom from "../images/level2Room2Move.png"
import football from "../images/football.png"
import tennisball from "../images/tennis-ball.png"
import fence from "../images/fence.png"
import smallstone from "../images/smallStone.png"
import ending from "../images/endingLvl1.png"
import fontFile from "../css/PressStart2P-Regular.ttf";
import leaf from "../images/leaf.png"
import click from "../sounds/click.wav"
import offclick from "../sounds/offclick.wav"
import opendoor from "../sounds/explosion.wav"
import pickup from "../sounds/pickupLeaf.wav"
import pigeonSound from "../sounds/pigeon.wav"
import characterSheet from "../images/character1.png"
import characterFWalkSheet from "../images/BASE_character F_walk sprite.png"
import CharacterSWalkSheet from "../images/BASE_character S_walk sprite.png"
import CharacterFWalkSheet1 from "../images/1_character F_walk sprite.png"
import CharacterFWalkSheet2 from "../images/2_character F_walk sprite.png"
import CharacterFWalkSheet3 from "../images/3_character F_walk sprite.png"
import CharacterFWalkSheet4 from "../images/4_character F_walk sprite.png"
import CharacterBWalkSheet1 from "../images/1_character B_walk sprite.png"
import CharacterBWalkSheet2 from "../images/2_character B_walk sprite.png"
import CharacterBWalkSheet3 from "../images/3_character B_walk sprite.png"
import CharacterBWalkSheet4 from "../images/4_character B_walk sprite.png"
import CharacterSWalkSheet1 from "../images/1_character S_walk sprite.png"
import CharacterSWalkSheet2 from "../images/2_character S_walk sprite.png"
import CharacterSWalkSheet3 from "../images/3_character S_walk sprite.png"
import CharacterSWalkSheet4 from "../images/4_character S_walk sprite.png"
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
    Tennisball: new ImageSource(tennisball),
    Level1: new ImageSource(level1),
    Bgtest: new ImageSource(bgtest),
    realLevel: new ImageSource(realLevel),
    realLevel3: new ImageSource(realLevel3),
    Backbroundstart: new ImageSource(backgroundstart),
    TestButton: new ImageSource(testButton),
    TestButton2: new ImageSource(testButton2),
    Stone: new ImageSource(stone),
    Leaf: new ImageSource(leaf),
    Onewall: new ImageSource(moveWall),
    Moverock: new ImageSource(moveRock),
    Level2Onewall: new ImageSource(lvl2moveWall),
    Level2Movewall: new ImageSource(lvl2moveWalltwo),
    Level2Twowall: new ImageSource(lvl2MoveRoom),
    Tree: new ImageSource(tree),
    Fence: new ImageSource(fence),
    characterSheet: new ImageSource(characterSheet),
    Smallstone: new ImageSource(smallstone),
    Ending: new ImageSource(ending),
    Level2: new ImageSource(level2),
    Click: new Sound(click),
    Offclick: new Sound(offclick),
    Opendoor: new Sound(opendoor),
    Pickupleaf: new Sound(pickup),
    Pigeonsound: new Sound(pigeonSound),
    CharacterSWalkSheet: new ImageSource(CharacterSWalkSheet),
    CharacterFWalkSheet: new ImageSource(characterFWalkSheet),
    Logo: new ImageSource(logo),
    Start: new ImageSource(start),
    CharacterSWalkSheet1: new ImageSource(CharacterSWalkSheet1),
    CharacterSWalkSheet2: new ImageSource(CharacterSWalkSheet2),
    CharacterSWalkSheet3: new ImageSource(CharacterSWalkSheet3),
    CharacterSWalkSheet4: new ImageSource(CharacterSWalkSheet4),
    CharacterFWalkSheet1: new ImageSource(CharacterFWalkSheet1),
    CharacterFWalkSheet2: new ImageSource(CharacterFWalkSheet2),
    CharacterFWalkSheet3: new ImageSource(CharacterFWalkSheet3),
    CharacterFWalkSheet4: new ImageSource(CharacterFWalkSheet4),
    CharacterBWalkSheet1: new ImageSource(CharacterBWalkSheet1),
    CharacterBWalkSheet2: new ImageSource(CharacterBWalkSheet2),
    CharacterBWalkSheet3: new ImageSource(CharacterBWalkSheet3),
    CharacterBWalkSheet4: new ImageSource(CharacterBWalkSheet4)
}
// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = [];
for (const key in Resources) {
  resourceArray.push(Resources[key]);
}

const ResourceLoader = new Loader(resourceArray);

ResourceLoader.logo = logo;
ResourceLoader.logoWidth = 478;
ResourceLoader.logoHeight = 241;
ResourceLoader.backgroundColor = new Color(145, 190, 97, 1);



export { Resources, ResourceLoader };
