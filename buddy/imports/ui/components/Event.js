import React from React

export default class Event  extends React.Component {

 


render(){
/*we can create variables here for conditional rendering purposes or for styling purposes*/
var example = event

return(
     <div>

    {example == true ? <h1>Its true</h1> : <h1>its false</h1>}
    </div>
    )
  }
}