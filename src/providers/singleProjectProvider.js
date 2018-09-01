import {projectsFullData} from '../mocks/projectsFullData';

export function get(projectId) {
    let project = projectsFullData[projectId];
    project.id = projectId;
    return project;
}