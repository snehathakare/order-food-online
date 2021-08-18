import React, { Fragment } from 'react'
import './Menu.css'

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
        <button>Add to cart</button>
      </div>
    </div>;
  };

  export const MenuList = () => {
    return <div className="flex">
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
  }
   