import React from 'react'
import { Menu } from './Menu'
import { Nav } from './Nav'

interface HeaderProps {
    header: string,
    phone:string
  }
  
  export const LandingPage: React.FC<HeaderProps> = ({ phone,header }) => {
    
  
  return <div>
      <div>
        <Nav title={"Home"}/>
        <Nav title={"Menu"}/>
        <Nav title={"Track"}/>
        <Nav title={"Contact"}/>
      </div>
      <h1>{header}</h1>
      <h2>{phone}</h2>
      <Menu image={"https://image.shutterstock.com/image-vector/big-round-pizza-splashing-cheese-260nw-764001601.jpg"}
            name={"Double cheese pizza"}
            description={"two layer pizza with cheese inside"}
            price={670} />
    </div>;
  };