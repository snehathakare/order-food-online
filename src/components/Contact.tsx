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
        <h3>Address</h3>
        <h3>Email</h3>
        <h3>Phone</h3>
    </div>    
    </div>
}

