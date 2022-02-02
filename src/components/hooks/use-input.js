import { useState } from "react";

const useInput = (validateValue) => {
    const [enterFirstNameValue, setEnteredFirstName] = useState("");
    const [firstNameIsTouched, setEnteredFirstNameIsTouched] = useState(false);
    const enterFirstNameIsValid = validateValue(enterFirstNameValue);
    const NameError = !enterFirstNameIsValid && firstNameIsTouched;

    const valueChangeHandler = (event) => {
        setEnteredFirstName(event.target.value);
    };
    const inputBlurHandler = (event) => {
        setEnteredFirstNameIsTouched(event.target.value);
    };

    //reset

    const reset = () => {
        setEnteredFirstName('');
        setEnteredFirstNameIsTouched(false);
    };
    return {
        value: enterFirstNameValue,
        isValid: enterFirstNameIsValid,
        NameError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};
export default useInput;
