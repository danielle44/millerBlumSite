import {locations} from '../mocks/locations';

export function getLocationName(lightProject) {
    let locationId = lightProject.locationId;
    let location = locations.find(location => location.id === locationId);

    if (!location) {
        return "unknown";
    }

    return location.en;
}