import React, { useState, useRef } from "react";
import "./detailsform.css";
import Card from "../ul/card";

const deatils = React.memo((props) => {
    //useRef
    const firstNameRef = useRef();

    const [enterFirstName, setEnteredFirstName] = useState("");
    const [enterLastName, setEnteredLastName] = useState("");
    const [enterEmail, setEnteredEmail] = useState("");
    const [entertext, setEnteredText] = useState("");


    //error
    const [enterFirstNameIsValid, setEnteredFirstNameIsValid] = useState(false);
    const [enterLastNameIsValid, setEnteredLastNameIsValid] = useState(false);
    const [enterEmailIsValid, setEnteredEmailIsValid] = useState(false);
    const [entertextIsValid, setEnteredTextIsValid] = useState(false);


    const submitHandler = (event) => {
        event.preventDefault();
        //   props.onAddIngredient({ firstName: enterFirstName, LastName: enterLastName, email: enterEmail, textarea: entertext });
        console.log(enterFirstName);
        console.log(enterLastName);
        console.log(enterEmail);
        console.log(entertext);

        if (enterFirstName.trim() === "") {
            setEnteredFirstNameIsValid(false);
            return;
        }
        setEnteredFirstNameIsValid(true);


        if (enterLastName.trim() === "") {
            setEnteredLastNameIsValid(false);
            return;
        }
        setEnteredLastNameIsValid(true);


        if (enterEmail.trim() === "") {
            setEnteredEmailIsValid(false);
            return;
        }
        setEnteredEmailIsValid(true);


        if (entertext.trim() === "") {
            setEnteredTextIsValid(false);
            return;
        }
        setEnteredTextIsValid(true);



        const enterFirstNameValue = firstNameRef.current.value;
        console.log(enterFirstNameValue);


        //clearing input values useing state
        setEnteredFirstName('');
        setEnteredLastName('');
        setEnteredEmail('');
        setEnteredText('');

        //clearing  input values useing useRef (not good way)
        firstNameRef.current.value = '';
    };

    return (
        <section className="ingredient-form">
            <Card>
                <form onSubmit={submitHandler}>
                    <h1>Contact Us</h1>

                    <div className="form-control">
                        <label htmlFor="fn">FullName</label>

                        <input
                            ref={firstNameRef}
                            type="text"
                            id="fn"
                            value={enterFirstName}
                            onChange={(event) => {
                                setEnteredFirstName(event.target.value);
                            }}
                        />
                        {!enterFirstNameIsValid && <p className="error-text">FirstName not be empty</p>}
                    </div>

                    <div className="form-control">
                        <label htmlFor="in">LastName</label>
                        <input
                            type="text"
                            id="in"
                            value={enterLastName}
                            onChange={(event) => {
                                setEnteredLastName(event.target.value);
                            }}
                        />
                        {!enterLastNameIsValid && <p className="error-text">lastName not be empty</p>}
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={enterEmail}
                            onChange={(event) => {
                                setEnteredEmail(event.target.value);
                            }}
                        />
                        {!enterEmailIsValid && <p className="error-text">Email not be empty</p>}
                    </div>

                    <div className="form-control">
                        <label htmlFor="area">Leaave us a few words</label>
                        <textarea
                            type="text"
                            id="area"
                            value={entertext}
                            onChange={(event) => {
                                setEnteredText(event.target.value);
                            }}
                        />
                        {!entertextIsValid && <p className="error-text"> comment not be empty</p>}
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
