import React from "react";

function NavBarChild(props) {
    return (
        props.isLoggedIn ?
            <button onClick={props.handleClick}>Logout</button>
            :
            <form>
                <label htmlFor="username">Username:</label>
                <input placeholder="username" id="username" />

                <label htmlFor="password">Password:</label>
                <input placeholder="password" id="password" />
                <button onClick={props.handleClick}>Login</button>
            </form>
    )
}

export default NavBarChild