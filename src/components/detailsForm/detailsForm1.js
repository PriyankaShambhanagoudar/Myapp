//using custom hook

import React from "react";
import "./detailsform.css";
import Card from "../ul/card";
import useInput from "../hooks/use-input";

const deatils = React.memo((props) => {

    //FirstName
    const {
        value: enterFirstName,
        NameError: FirstNameInputError,
        valueChangeHandler: firstNameInputHandler,
        inputBlurHandler: firstNameInputBlur,
        isValid: enterFirstNameIsValid,
        reset: resetInput,
    } = useInput(value => value.trim() !== "");


    //LastName
    const {
        value: enterLastName,
        NameError: LastNameInputError,
        valueChangeHandler: LastNameInputHandler,
        inputBlurHandler: LastNameInputBlur,
        isValid: enterLastNameIsInValid,
        reset: resetLastNameInput,
    } = useInput(value => value.trim() !== "");

    //E-mail
    const {
        value: enterEmail,
        NameError: EmailInputError,
        valueChangeHandler: EmailInputHandler,
        inputBlurHandler: emailInputBlur,
        isValid: enterEmailIsInValid,
        reset: resetEmailInput,
    } = useInput(value => value.includes('@'));


    //text
    const {
        value: enterText,
        NameError: textInputError,
        valueChangeHandler: textInputHandler,
        inputBlurHandler: textInputBlur,
        isValid: textIsInValid,
        reset: resetTextInput,
    } = useInput(value => value.trim() !== "");


    let formIsValid = false;

    if (
        enterFirstNameIsValid &&
        enterLastNameIsInValid &&
        enterEmailIsInValid &&
        textIsInValid
    ) {
        formIsValid = true;
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!enterFirstNameIsValid) {
            return;
        }

        if (!enterLastNameIsInValid) {
            return;
        }

        if (!enterEmailIsInValid) {
            return;
        }

        if (!textIsInValid) {
            return;
        }

        //clearing input values useing state
        resetInput();
        resetLastNameInput();
        resetEmailInput();
        resetTextInput();

    };

    const firstNameInputClasses = FirstNameInputError
        ? "form-control invalid"
        : "form-control ";
    const lastNameInputClasses = LastNameInputError
        ? "form-control invalid"
        : "form-control ";
    const emaiInputClasses = EmailInputError
        ? "form-control invalid"
        : "form-control ";
    const commentInputClasses = textInputError
        ? "form-control invalid"
        : "form-control ";

    return (
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <h1>Contact Us</h1>

                    <div className={firstNameInputClasses}>
                        <label htmlFor="fn">FullName</label>
                        <input
                            type="text"
                            id="fn"
                            value={enterFirstName}
                            onBlur={firstNameInputBlur}
                            onChange={firstNameInputHandler}
                        />
                        {FirstNameInputError && (
                            <p className="error-text">FirstName not be empty</p>
                        )}
                    </div>

                    <div className={lastNameInputClasses}>
                        <label htmlFor="in">LastName</label>
                        <input
                            type="text"
                            id="in"
                            value={enterLastName}
                            onBlur={LastNameInputBlur}
                            onChange={LastNameInputHandler}
                        />
                        {LastNameInputError && (
                            <p className="error-text">lastName not be empty</p>
                        )}
                    </div>

                    <div className={emaiInputClasses}>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={enterEmail}
                            onBlur={emailInputBlur}
                            onChange={EmailInputHandler}
                        />
                        {enterEmailIsInValid && (
                            <p className="error-text">Please enter valid Email.</p>
                        )}
                    </div>

                    <div className={commentInputClasses}>
                        <label htmlFor="area">Leave us a few words</label>
                        <textarea
                            type="text"
                            id="area"
                            value={enterText}
                            onBlur={textInputBlur}
                            onChange={textInputHandler}
                        />
                        {textIsInValid && (
                            <p className="error-text"> comment not be empty</p>
                        )}
                    </div>

                    <div className="formactions ">
                        <button disabled={!formIsValid} type="submit">
                            {" "}
                            Submit
                        </button>
                    </div>
                </form>
            </Card>
        </section>
    );
});
export default deatils;

