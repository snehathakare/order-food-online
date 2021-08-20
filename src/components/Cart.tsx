import React, { Fragment } from 'react'

interface CartItems {
    subtotal: string,
    message?: string
}

export const Cart = ({subtotal="0.00", message = "your cart is empty"}) => {
    return <Fragment>
        <h2>Your Cart</h2>
        <p>{message}</p>{/*display only if cart is empty */}
        <p>Subtototal: {subtotal}</p>
        <button className="btn-secondary">Order now</button>
    </Fragment>
}