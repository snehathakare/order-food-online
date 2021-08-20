import React from 'react'
import './Contact.css'

export const Contact = () => {
    return <div className="contact-container flex-row">
    <div className="contact-form flex-col">
        <h1>Send Us a Quick Message</h1>
        <p>Enter tracking number bellow!</p>
        <div className="flex-col">
            <label>Full Name:</label>
            <input type="text" />
            <label>Email Address:</label>
            <input type="text" />
            <label>Message:</label>
            <input type="text" />
            <button>Send</button>
        </div>
    </div>
    <div className="flex-col">
        <h1>Get In Touch</h1>
        <p>
            Special requests or feedback? Leave us a message and we will get back to you within the next 24 hrs.
        </p>
        <h3>Address</h3>
        <p>
        #22 Food Lane, Pizza House, Naples-456
        </p>
        <h3>Email</h3>
        <p>support@pizzaorder</p>
        <h3>Phone</h3>
        <p>+88888888</p>
        <h3>Open</h3>
        <ul>
            <li>Mon: Closed</li>
            <li>Tue - Sun: 10:00 - 21:00</li>
        </ul>
    </div>    
    </div>
}

