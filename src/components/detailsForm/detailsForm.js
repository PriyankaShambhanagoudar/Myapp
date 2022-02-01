import React, { useState } from "react";
import "./detailsform.css";
import Card from "../ul/card";

const deatils = React.memo((props) => {
    //useRef
    //  const firstNameRef = useRef();

    //useStae
    const [enterFirstName, setEnteredFirstName] = useState("");
    const [enterLastName, setEnteredLastName] = useState("");
    const [enterEmail, setEnteredEmail] = useState("");
    const [entertext, setEnteredText] = useState("");

    //input touched
    const [enterFirstNameTouched, setEnteredFirstNameTouched] = useState(false);
    const [enterLastNameTouched, setEnteredLastNameTouched] = useState(false);
    const [enterEmailTouched, setEnteredEmailTouched] = useState(false);
    const [entertextTouched, setEnteredTextTouched] = useState(false);

    const enterFirstNameIsValid = enterFirstName.trim() !== "";
    const enterLastNameIsValid = enterLastName.trim() !== "";
    const enterEmailIsValid = enterEmail.trim() !== "";
    const entertextIsValid = entertext.trim() !== "";

    const enterFirstNameIsInValid =
        !enterFirstNameIsValid && enterFirstNameTouched;
    const enterLastNameIsInValid = !enterLastNameIsValid && enterLastNameTouched;
    const enterEmailIsInValid = !enterEmailIsValid && enterEmailTouched;
    const entertextIIsInValid = !entertextIsValid && entertextTouched;

    const firstNameInputHandler = (event) => {
        setEnteredFirstName(event.target.value);
    };
    const LastNameInputHandler = (event) => {
        setEnteredLastName(event.target.value);
    };
    const emailInputHandler = (event) => {
        setEnteredEmail(event.target.value);
    };
    const texrInputHandler = (event) => {
        setEnteredText(event.target.value);
    };

    //blur
    const firstNameInputBlur = (event) => {
        setEnteredFirstNameTouched(true);
    };
    const lasttNameInputBlur = (event) => {
        setEnteredLastNameTouched(true);
    };
    const EmailInputBlur = (event) => {
        setEnteredEmailTouched(true);
    };
    const textInputBlur = (event) => {
        setEnteredTextTouched(true);
    };

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

        // const enterFirstNameValue = firstNameRef.current.value;

        //clearing input values useing state
        setEnteredFirstName("");
        setEnteredLastName("");
        setEnteredEmail("");
        setEnteredText("");

        setEnteredFirstNameTouched(false);
        setEnteredLastNameTouched(false);
        setEnteredEmailTouched(false);
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
                            onBlur={firstNameInputBlur}
                            // onChange={(event) => {
                            //     setEnteredFirstName(event.target.value);
                            // }}
                            onChange={firstNameInputHandler}
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
                            onBlur={lasttNameInputBlur}
                            // onChange={(event) => {
                            //     setEnteredLastName(event.target.value);
                            // }}
                            onChange={LastNameInputHandler}
                        />
                        {enterLastNameIsInValid && (
                            <p className="error-text">lastName not be empty</p>
                        )}
                    </div>

                    <div className={emaiInputClasses}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={enterEmail}
                            onBlur={EmailInputBlur}
                            // onChange={(event) => {
                            //     setEnteredEmail(event.target.value);
                            // }}
                            onChange={emailInputHandler}
                        />
                        {enterEmailIsInValid && (
                            <p className="error-text">Email not be empty</p>
                        )}
                    </div>

                    <div className={commentInputClasses}>
                        <label htmlFor="area">Leaave us a few words</label>
                        <textarea
                            type="text"
                            id="area"
                            value={entertext}
                            onBlur={textInputBlur}
                            // onChange={(event) => {
                            //     setEnteredText(event.target.value);
                            // }}
                            onChange={texrInputHandler}
                        />
                        {entertextIIsInValid && (
                            <p className="error-text"> comment not be empty</p>
                        )}
                    </div>

                    <div className="formactions ">
                        <button type="submit"> Submit</button>
                    </div>
                </form>
            </Card>
        </section>
    );
});
export default deatils;
