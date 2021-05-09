import React from 'react';
import './admin-navbar.styles.scss'


function AdminNavbarComponent(props) {



    return (
        <div className='admin-navbar'>
            <h3>Home</h3>
            <h3>Orders</h3>
            <h3>Clients</h3>
            <h3>Coupon</h3>
            <h3>Waiting List</h3>
        </div>
    );
}

export default AdminNavbarComponent;
