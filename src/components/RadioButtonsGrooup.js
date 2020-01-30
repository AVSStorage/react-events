import * as React from 'react';
import {Translations} from "../helpers/utilities";


export default function RadioButtonsGrooup ({radioButtons, handleCategory, checkedRadioButton}) {
    return radioButtons.map((radioButton) => <label><span className={"uk-margin-small-right"}>{Translations.CATEGORIES[radioButton]}</span><input className="uk-checkbox" name={radioButton} checked={radioButton === checkedRadioButton} type={"checkbox"} value={radioButton} onClick={(evt) => handleCategory(evt.target.value) }/></label> )
};