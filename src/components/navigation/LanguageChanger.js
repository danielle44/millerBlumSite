import React, { Component } from 'react';
import { setLanguage, getLanguage as getCurrentLanguage } from '../../i18n/languageSetter'
import strings from "../../i18n/strings";

class LanguageChanger extends Component {
    constructor(props) {
        super(props);
        this.getLanguageDisplayName = this.getLanguageDisplayName.bind(this);
        this.getOptionElement = this.getOptionElement.bind(this);
        this.getAllLanguagesIds = this.getAllLanguagesIds.bind(this);
        this.LanguageChanged = this.LanguageChanged.bind(this);
    }

    getLanguageDisplayName(languageId) {
        return strings._props[languageId].language.displayName
    }

    getAllLanguagesIds () {
        return Object.keys(strings._props);
    }

    getOptionElement(languageId) {
        return (
            <option key={languageId} value={languageId}>{this.getLanguageDisplayName(languageId)}</option>
        );
    }

    LanguageChanged(event) {
        let selectedLanguageId = event.nativeEvent.target.value;
        setLanguage(selectedLanguageId);
    }

    render() {
        let languagesIds = this.getAllLanguagesIds();

        return (
            <div>
                <select defaultValue={getCurrentLanguage()} onChange={this.LanguageChanged}>
                    {languagesIds.map(this.getOptionElement)}
                </select>
            </div>
        );
    }
}

export default LanguageChanger;