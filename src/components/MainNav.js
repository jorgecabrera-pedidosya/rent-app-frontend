import React from "react";


const MainNav = () => {

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#profile">Publish</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#profile">Rented Items</a>
            </li>
        </ul>)
}

export default MainNav;