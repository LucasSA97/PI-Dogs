import React from "react";
import { Link } from "react-router-dom";

const Detail = () => {
    return(
        <div>
            <h1>Welcome</h1>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Detail;