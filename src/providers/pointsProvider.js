let bluePoints = [
    {x: 10, y: 80},
    {x: 30, y: 90},
    {x: 40, y: 40},
    {x: 70, y: 30},
    {x: 90, y: 85}
];

let redPoints = [
    {x: 1, y: 8},
    {x: 30, y: 95},
    {x: 40, y: 40},
    {x: 60, y: 70},
    {x: 80, y: 20}
];

let greenPoints = [
    {x: 20, y: 70},
    {x: 50, y: 60},
    {x: 40, y: 10},
    {x: 5, y: 85},
    {x: 90, y: 25}
];

function getData() {
    return {
        blue: bluePoints,
        red: redPoints,
        green: greenPoints
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