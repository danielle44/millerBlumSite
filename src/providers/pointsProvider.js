let bluePoints = [
    {x: 10, y: 30},
    {x: 30, y: 20},
    {x: 140, y: 40},
    {x: 70, y: 35},
    {x: 190, y: 60}
];

let redPoints = [
    {x: 1, y: 8},
    {x: 30, y: 44},
    {x: 40, y: 40},
    {x: 160, y: 56},
    {x: 80, y: 20}
];

let greenPoints = [
    {x: 120, y: 10},
    {x: 50, y: 60},
    {x: 40, y: 10},
    {x: 105, y: 35},
    {x: 90, y: 25}
];

function getData() {
    return {
        "#40e0d0": bluePoints,
        "#ffd700": redPoints,
        "#ff4500": greenPoints
    };
}

function sortByX(points) {
    return points.sort((p1, p2) => p1.x - p2.x);
}

function get() {
    let data = getData();

    Object.keys(data).forEach((key) => {
        data[key] = sortByX(data[key]);
    });

    return data;
}

export { get };