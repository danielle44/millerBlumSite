import {sizes} from '../mocks/sizes';

export function getSizeLetter(sizeNumber) {
    if (!sizeNumber) return 'unknown';

    let [letter, number] = Object.entries(sizes).find(([letter, number]) => sizeNumber < number);
    return letter;
}