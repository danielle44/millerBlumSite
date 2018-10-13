const dimensions = [
    [4, 3],[1, 1], [3, 4],
    [3, 4],[3, 4],[4, 3],
    [3, 4], [4, 3], [4, 3],
    [3, 4], [4, 3], [4, 3],
    [4, 3], [4, 3], [4, 3]
];

export function addDimensions(items) {
    let result = [];
    for (let i=0; i<items.length; i++) {
        let [width, height] = dimensions[i%dimensions.length];
        result[i] = {...items[i], width, height, src: items[i].thumbnail}
    }

    return result;
}