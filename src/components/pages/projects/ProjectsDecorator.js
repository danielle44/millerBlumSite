const ratios = [
    {width: 4, height: 3},
    {width: 1, height: 1},
    {width: 3, height: 4},
    {width: 1, height: 2}
];

export function decorateProjects(projects) {
    return projects.map(project => {
        return {...project, ...getDimension(), src: project.thumbnail};
    });

    function getDimension() {
        return getRandomItem(ratios);
    }

    function getRandomItem(array) {
        return array[Math.floor(Math.random()*array.length)];
    }
}