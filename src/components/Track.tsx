import React, {useState, ChangeEvent} from 'react'
import './Track.css'

export const Track = () => {
    const [trackVal, setTrackVal] = useState("")
    
    const search = (event:ChangeEvent<HTMLInputElement>) => {
        setTrackVal(event.target.value)
    }

    const track = (event:React.MouseEvent<HTMLButtonElement>) => {
         console.log("button clicked")
    }
    
    return <div className="flex-col">
        <h1>Track the progress of your order</h1>
        <p>Enter tracking number below!</p>
        <input type="text" 
        placeholder = "Tracking Number"
        onChange = {search} />
        <button onClick={track} value={trackVal}>Track Order</button>
        <h3>Thanks for waiting, your order with tracking number <em>{trackVal}</em> reach you soon</h3>
    </div>
}



