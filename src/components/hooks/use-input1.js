//useReducer

import { useReducer } from "react";

const initialInputState = {
    value: '',
    firstNameIsTouched: false,
};

const inputStateReducer = (state, action) => {
    if (action.type === "INPUT") {
        return { value: action.value, firstNameIsTouched: state.firstNameIsTouched };
    }
    if (action.type === "BLUR") {
        return { firstNameIsTouched: true, value: state.value };

    }
    if (action.type === "RESET") {
        return { firstNameIsTouched: false, value: "" };

    }
    return initialInputState;
};

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);



    const enterFirstNameIsValid = validateValue(inputState.value);
    const NameError = !enterFirstNameIsValid && inputState.firstNameIsTouched;

    const valueChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });

    };
    const inputBlurHandler = (event) => {
        dispatch({ type: 'BLUR' });
    };

    //reset

    const reset = () => {
        dispatch({ type: 'RESET' });
    };
    return {
        value: inputState.value,
        isValid: enterFirstNameIsValid,
        NameError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};
export default useInput;
