import React from 'react'

interface HeaderProps {
    header: string,
    phone:string
  }
  
  const Header: React.FC<HeaderProps> = ({ phone,header }) => {   
  return <div>
      <h1>{header}</h1>
      <h2>{phone}</h2>
    </div>;
  };

  export const LandingPage = () => {
    return <>
      <Header header = {"Order Food Online"}
        phone = {"Call us +0912345678"} />
    </>
  }