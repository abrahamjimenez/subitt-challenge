import React, {useEffect, useState} from "react";
import axios from "axios";

const UserRegistration = () => {
    const [products, setProducts] = useState([]);

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

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"/>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"/>

            <button type="submit">Submit</button>
        </form>
    );
};

export default UserRegistration;
