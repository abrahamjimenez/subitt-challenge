import React, {useEffect, useState} from "react";
import axios from "axios";

const UserRegistration = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [sucessMessage, setSucessMessage] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get("http://localhost:8080/")
            setProducts(data)
        }

        fetchProducts()
    }, []);

    useEffect(() => {
        console.log(products)
    }, [products]);

    // post to 8080
    const submitHandler = async (e) => {
        e.preventDefault()

        const user = {
            name,
            email,
            password
        }

        // prevents app from crashing
        try {
            // send data to server
            await axios.post("http://localhost:8080/register", user)

            console.log("user created successfully")
            setSucessMessage("User created successfully")
        } catch (e) {
            console.log("email already exists")
            setErrorMessage("Email already exists")
        }
    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input required type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="email">Email</label>
            <input required type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password">Password</label>
            <input required type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit">Submit</button>
        </form>

            {sucessMessage &&
                <p>
                    {sucessMessage}
                </p>
            }

        {errorMessage &&
            <p>
                {errorMessage}
            </p>
        }
        </>
    );
};

export default UserRegistration;
