import icons from '../icons.json'
import { Icon } from './icon';

let loadIcons = (): Icon[] => {
    return icons.map(data => new Icon(data))
}

export default loadIcons