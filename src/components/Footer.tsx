import React from 'react'
import './Footer.css'
import {Nav} from './Nav'

interface FooterProps {
    header?: string,
    
  }
  
  export const Footer: React.FC<FooterProps> = ({ header }) => {
    
  
  return <div className="footer-container flex-row">
      <div>
        <h3>Quick Links</h3>
        <Nav title={"HOME"} link={"/"} />
        <Nav title={"MENU"} link={"/menu"} />
        <Nav title={"TRACK"} link={"/track"} />
        <Nav title={"CONTACT"} link={"/contact"} />
      </div>
      <div>
        <h3>Restuarant details</h3>
        <h3>Address</h3>
          <p>
          #22 Food Lane, Pizza House, Naples-456
          </p>
          <h3>Email</h3>
          <p>support@pizzaorder</p>
          <h3>Phone</h3>
          <p>+88888888</p>
      </div>
      <div>
        <h3>Opening hours</h3>
        <ul>
            <li>Mon: Closed</li>
            <li>Tue - Sun: 10:00 - 21:00</li>
        </ul>
      </div>
    </div>;
  };