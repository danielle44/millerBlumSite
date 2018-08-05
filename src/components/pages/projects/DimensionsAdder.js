const ratios = [
    {width: 1, height: 1},
    {width: 4, height: 3},
    {width: 5, height: 3},
    {width: 7, height: 3},
    {width: 5, height: 6},
];

export function addDimensions(items) {
    return items.map(item => {
        return {...item, ...getDimension(), src: item.thumbnail};
    });

    function getDimension() {
        return getRandomItem(ratios);
    }

    function getRandomItem(array) {
        return array[Math.floor(Math.random()*array.length)];
    }
}