import {projectsFullData} from '../mocks/projectsFullData';

export function get(projectId) {
    return projectsFullData[projectId];
}