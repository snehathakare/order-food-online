import React from 'react'
import './Track.css'

export const Track = () => {
    return <div className="flex-col">
        <h1>Track the progress of your order</h1>
        <p>Enter tracking number below!</p>
        <input type="text" placeholder = "Tracking Number" />
        <button>Track Order</button>
    </div>
}

