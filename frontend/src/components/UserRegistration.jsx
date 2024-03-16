import React from "react";

const UserRegistration = () => {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"/>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"/>
        </form>
    );
};

export default UserRegistration;
