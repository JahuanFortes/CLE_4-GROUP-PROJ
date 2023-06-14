import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import block from '../images/Sprite-0002-rock.png'
const Resources = {
    Fish: new ImageSource(fishImage),
    block: new ImageSource(block),
}
const ResourceLoader = new Loader([Resources.Fish, Resources.block])

export { Resources, ResourceLoader };
