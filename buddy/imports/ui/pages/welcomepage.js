//top-level page, will call layout inside of here and I'm thinking logic will happen here?

import React from "react";
import { Wave, Random } from "react-animated-text";

const exampleStyle = {
    display: "inline-block",
    textAlign:"center",
    backgroundColor:"yellow",   
    margin: "0 auto",
    paddingTop:"2.7em",    
    width:"100%",
    position:"fixed",
    height:"100%",
    top:"0px",
    left:"0px",
    zindex:"1000",
    fontSize: "8rem",
    // fontWeigh:700    
  };
const skipStyle = {
  fontSize: "1rem",
}

export const Random1 = () => (
    <div style={exampleStyle}>
      <Random
        text="Buddy Up!"
        effect="jump"
        effectChange={2.0}
        effectDuration={0.3}
      />
    
    </div>,

    <div style={skipStyle}>
       <h1>Skip</h1>
    </div>
  );