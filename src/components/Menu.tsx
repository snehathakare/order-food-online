import React, { Fragment } from 'react'
import './Menu.css'
import {Cart} from './Cart'

interface MenuProps {
    image: string,
    name:string,
    description: string,
    price: number
  }
  
  const Menu: React.FC<MenuProps> = (MenuProps) => {
  return <div className="menu-details flex-row menu-card">
      <img src={MenuProps.image} />
      <div>
        <h1>{MenuProps.name}</h1>
        <p>{MenuProps.description}</p>
        <p><strong>${MenuProps.price}</strong></p>
        <button className="btn-primary">Add to cart</button>
      </div>
    </div>;
  };

  export const MenuList = () => {
    return <div className="menu-container flex-row">
        <div className="flex-col">
          <div className="cart-card">
            <p>Pizzas</p>
            <p>Burgers</p>
            <p>Desserts</p>
            <p>Beverages</p>
            <p>Sides</p>
            <p>Pastas</p>
          </div>
          <div className="cart-card">
            <h1>Need help?</h1>
            <p>+8989898989</p>
          </div>
        </div>
        <div>
          <Menu image={"https://image.shutterstock.com/image-vector/big-round-pizza-splashing-cheese-260nw-764001601.jpg"}
              name={"Double cheese pizza"}
              description={"two layer pizza with cheese inside"}
              price={7} />
          <Menu image={"https://image.shutterstock.com/image-vector/big-round-pizza-splashing-cheese-260nw-764001601.jpg"}
              name={"Margerita"}
              description={"two layer pizza with cheese inside"}
              price={10} />
          <Menu image={"https://image.shutterstock.com/image-vector/big-round-pizza-splashing-cheese-260nw-764001601.jpg"}
              name={"Pepperoni Cheese"}
              description={"two layer pizza with cheese inside"}
              price={6} />
        </div>
        <div className="cart-card">
          <Cart />
        </div>            
    </div>
  }
   