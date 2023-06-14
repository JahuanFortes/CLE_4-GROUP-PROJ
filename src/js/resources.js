import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import map from '../images/map.jpg'

const Resources = {
    Fish: new ImageSource(fishImage),
    Map: new ImageSource(map)
}
const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Map
])

export { Resources, ResourceLoader }