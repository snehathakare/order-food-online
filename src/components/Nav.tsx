import React from 'react'
import { Link } from 'react-router-dom'

interface NavProps {
    title: string,
    link: string
  }
  
  export const Nav: React.FC<NavProps> = ({link, title}) => {
    
  
  return <div>
      <Link to={link}>{title}</Link>
    </div>;
  };