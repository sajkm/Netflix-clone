import React, { useEffect, useState } from "react";
import "./Nav.css";
export default function Nav() {
  const [show,setshow] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>600){
        setshow(true)
      }else{
        setshow(false)
      }
    })
  })

  console.log(show);
  return (
    <div className={`navbar ${show && 'nav-black'}`}>
      <img width={'100px'} src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
      
    </div>
    
  );
}
