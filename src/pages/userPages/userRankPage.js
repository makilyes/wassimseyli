import React from 'react';

function UserRankPage(props) {
    return (
        <div>
            <h1>MY RANK IS : </h1>
            <h2>{sessionStorage.getItem("userId") || "Not Available"}</h2>
        </div>
    );
}

export default UserRankPage;