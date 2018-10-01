let bluePoints = [
    {x: 20, y: 30},
    {x: 30, y: 20},
    {x: 140, y: 40},
    {x: 70, y: 30},
    {x: 180, y: 60}
];

let redPoints = [
    {x: 19, y: 20},
    {x: 30, y: 40},
    {x: 40, y: 40},
    {x: 160, y: 50},
    {x: 80, y: 20}
];

let greenPoints = [
    {x: 120, y: 10},
    {x: 50, y: 60},
    {x: 40, y: 10},
    {x: 105, y: 30},
    {x: 90, y: 20}
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