import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import fishImage from '../images/fish.png'
import fontSheet from '../images/Font16_42_Normal4_sheet.png'

const Resources = {
    Fish: new ImageSource(fishImage),
    Font: new ImageSource(fontSheet)
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}


const ResourceLoader = new Loader(resourceArray);


export { Resources, ResourceLoader }