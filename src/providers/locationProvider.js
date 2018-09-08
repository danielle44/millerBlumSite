import {locations} from '../mocks/locations';

export function getLocationName(locationId) {
    if (!locationId) return 'unknown';

    let location = locations.find(location => location.id === locationId);

    if (!location) {
        return "unknown";
    }

    return location.en;
}