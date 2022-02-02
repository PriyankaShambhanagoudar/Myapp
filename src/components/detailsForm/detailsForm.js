//using useState hook

import React, { useState } from "react";
import "./detailsform.css";
import Card from "../ul/card";


const deatils = React.memo((props) => {
    //useRef
    //  const firstNameRef = useRef();



    //useStae
    const [enterFirstName, setEnteredFirstName] = useState("");
    const [enterFirstNameTouched, setEnteredFirstNameTouched] = useState(false);
    const enterFirstNameIsValid = enterFirstName.trim() !== "";
    const enterFirstNameIsInValid =
        !enterFirstNameIsValid && enterFirstNameTouched;

    const [enterLastName, setEnteredLastName] = useState("");
    const [enterLastNameTouched, setEnteredLastNameTouched] = useState(false);
    const enterLastNameIsValid = enterLastName.trim() !== "";
    const enterLastNameIsInValid = !enterLastNameIsValid && enterLastNameTouched;

    const [enterEmail, setEnteredEmail] = useState("");
    const [enterEmailTouched, setEnteredEmailTouched] = useState(false);
    const enterEmailIsValid = enterEmail.includes("@");
    const enterEmailIsInValid = !enterEmailIsValid && enterEmailTouched;

    const [entertext, setEnteredText] = useState("");
    const [entertextTouched, setEnteredTextTouched] = useState(false);
    const entertextIsValid = entertext.trim() !== "";
    const entertextIIsInValid = !entertextIsValid && entertextTouched;

    let formIsValid = false;

    if (
        enterFirstNameIsValid &&
        enterLastNameIsValid &&
        enterEmailIsValid &&
        entertextIsValid
    ) {
        formIsValid = true;
    }

    const submitHandler = (event) => {
        event.preventDefault();

        setEnteredFirstNameTouched(true);
        setEnteredLastNameTouched(true);
        setEnteredEmailTouched(true);
        setEnteredTextTouched(true);

        if (!enterFirstNameIsValid) {
            return;
        }

        if (!enterLastNameIsValid) {
            return;
        }

        if (!enterEmailIsValid) {
            return;
        }

        if (!entertextIsValid) {
            return;
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //reset
        // const enterFirstNameValue = firstNameRef.current.value;

        //clearing input values useing state
        setEnteredFirstName("");
        setEnteredFirstNameTouched(false);

        setEnteredLastName("");
        setEnteredLastNameTouched(false);

        setEnteredEmail("");
        setEnteredEmailTouched(false);

        setEnteredText("");
        setEnteredTextTouched(false);

        //clearing  input values useing useRef (not good way)
        //  firstNameRef.current.value = '';
    };

    const firstNameInputClasses = enterFirstNameIsInValid
        ? "form-control invalid"
        : "form-control ";
    const lastNameInputClasses = enterLastNameIsInValid
        ? "form-control invalid"
        : "form-control ";
    const emaiInputClasses = enterEmailIsInValid
        ? "form-control invalid"
        : "form-control ";
    const commentInputClasses = entertextIIsInValid
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
                            // ref={firstNameRef}
                            type="text"
                            id="fn"
                            value={enterFirstName}
                            onBlur={(event) => {
                                setEnteredFirstNameTouched(true);
                            }}
                            onChange={(event) => {
                                setEnteredFirstName(event.target.value);
                            }}

                        />
                        {enterFirstNameIsInValid && (
                            <p className="error-text">FirstName not be empty</p>
                        )}
                    </div>

                    <div className={lastNameInputClasses}>
                        <label htmlFor="in">LastName</label>
                        <input
                            type="text"
                            id="in"
                            value={enterLastName}
                            onBlur={(event) => {
                                setEnteredLastNameTouched(true);
                            }}

                            onChange={(event) => {
                                setEnteredLastName(event.target.value);
                            }}

                        />
                        {enterLastNameIsInValid && (
                            <p className="error-text">lastName not be empty</p>
                        )}
                    </div>

                    <div className={emaiInputClasses}>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={enterEmail}
                            onBlur={(event) => {
                                setEnteredEmailTouched(true);
                            }}
                            onChange={(event) => {
                                setEnteredEmail(event.target.value);
                            }}

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
                            value={entertext}
                            onBlur={(event) => {
                                setEnteredTextTouched(true);
                            }}
                            onChange={(event) => {
                                setEnteredText(event.target.value);
                            }}

                        />
                        {entertextIIsInValid && (
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



