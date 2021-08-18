import React from 'react'

interface NavProps {
    title: string,
    link?: string
  }
  
  export const Nav: React.FC<NavProps> = (NavProps) => {
    
  
  return <div>
      <h5>{NavProps.title}</h5>
    </div>;
  };