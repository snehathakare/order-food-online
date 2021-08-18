import React from 'react'

interface FooterProps {
    header: string,
    
  }
  
  export const Footer: React.FC<FooterProps> = ({ header }) => {
    
  
  return <div>
      {header}
        
    </div>;
  };