import React, { useState } from 'react';
import Navbar from '@theme-original/Navbar';


export default function NavbarWrapper(props) {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 60){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      <div className={colorChange ? 'n colorer' : 'n'}>
      <Navbar {...props} />
      </div>
      
    </>
  );
}
