import {sizes} from '../mocks/sizes';

export function getSizeLetter(lightProject) {
    let sizeNumber = lightProject.size;
    let [letter, number] = Object.entries(sizes).find(([letter, number]) => sizeNumber < number);
    return letter;
}