import {projectsLightData} from '../../../mocks/projectsLight';

export function get() {
    return getProjects();

    function deepClone(array) {
        return JSON.parse(JSON.stringify(array))
    }

    function getProjects() {
        let projects = deepClone(projectsLightData)
            .concat(deepClone(projectsLightData))
            .concat(deepClone(projectsLightData))
            .concat(deepClone(projectsLightData));

        projects = shuffle(projects);
        for (let i = 0; i<projects.length; i++) {
            projects[i].key = i;
        }

        return projects;
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
}