//top-level page, will call layout inside of here and I'm thinking logic will happen here?

import React from "react";
import { Wave, Random } from "react-animated-text";

const exampleStyle = {
    display: "inline-block",
    border: "1px solid #ccc",
    marginBottom: "1em",
    padding: "2em 1em 1em 1em",
    width: "80%",
    fontSize: "5rem"
  };

//   const codeStyle = {
//     textAlign: "left"
//   };
  
//   const codeDivStyle = {
//     backgroundColor: "#eee",
//     marginTop: "2em",
//     padding: "1px 1em",
//     overflow: "scroll",
//     fontSize: "1rem"
//   };

export const Random1 = () => (
    <div style={exampleStyle}>
      <Random
        text="Buddy Up!"
        effect="jump"
        effectChange={2.0}
        effectDuration={0.3}
      />
  
      {/* <div style={codeDivStyle}>
        <pre style={codeStyle}>
          &lt;Random<br />
          &nbsp;&nbsp;text="Jumping Beans!"<br />
          &nbsp;&nbsp;effect="jump"<br />
          &nbsp;&nbsp;effectChange=&#123;2.0}<br />
          &nbsp;&nbsp;effectDuration=&#123;0.3}<br />
          />
        </pre>
      </div> */}
    </div>
  );