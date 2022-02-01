import { useEffect, useState } from "react";
import Details from "./detailsForm";

const ContactForm = () => {
    const [userIngredients, setIserIngredients] = useState("");

    useEffect(() => {
        fetch(
            "https://myproject-df7c8-default-rtdb.firebaseio.com/contact.json"
        )
            .then((response) => response.json())
            .then((responseData) => {
                const loadedIngredients = [];

                for (const key in responseData) {
                    loadedIngredients.push({
                        id: key,
                        firstName: responseData[key].firstName,
                        LastName: responseData[key].LastName,
                        email: responseData[key].email,
                        textarea: responseData[key].textarea,
                    });
                }
                setIserIngredients(loadedIngredients);
            });
    }, []);

    useEffect(() => {
        console.log('adding data', userIngredients);
    });
    const addIngredientsHandler = (details) => {
        fetch(
            "https://myproject-df7c8-default-rtdb.firebaseio.com/contact.json",
            {
                method: "POST",
                body: JSON.stringify({ details }),
                headers: { "Content-Type": "application/json" },
            }).then((response) => {
                return response.json();
            }).then((responseData) => {
                setIserIngredients((preDetails) => [
                    ...preDetails,
                    { id: responseData.name, ...details },
                ]);
            });
    };


    return (
        <div className="App">
            <Details onAddIngredient={addIngredientsHandler} ContactForm={userIngredients} />
        </div>
    );
};

export default ContactForm;
