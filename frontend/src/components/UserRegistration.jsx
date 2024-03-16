import React, {useEffect, useState} from "react";
import axios from "axios";

const UserRegistration = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

        // send data to server
        const response = await axios.post("http://localhost:8080/", user)
        console.log(response);
        console.log(response.data);
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>

            <button type="submit">Submit</button>
        </form>
    );
};

export default UserRegistration;
