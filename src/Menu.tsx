import React from 'react'

interface MenuProps {
    image: string,
    name:string,
    description: string,
    price: number
  }
  
  export const Menu: React.FC<MenuProps> = (MenuProps) => {
    
  
  return <div>
      <img src={MenuProps.image} />
      <h1>{MenuProps.name}</h1>
      <p>{MenuProps.description}</p>
      <p><strong>{MenuProps.price}</strong></p>
      <button>Add to cart</button>
    </div>;
  };