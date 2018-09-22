import strings from './strings';

const STORAGE_KEY = 'languageId';

function getDefaultLanguageId() {
    return 'en';
}

function getInitLanguage() {
    let storedLanguageId = localStorage.getItem(STORAGE_KEY);
    return storedLanguageId || getDefaultLanguageId();
}

function setLanguage(languageId=getDefaultLanguageId()) {
    strings.setLanguage(languageId);
    localStorage.setItem(STORAGE_KEY, languageId);
}

function getLanguage() {
    return strings.getLanguage();
}

function initLanguage() {
    setLanguage(getInitLanguage());
}

export { setLanguage, getLanguage, initLanguage };