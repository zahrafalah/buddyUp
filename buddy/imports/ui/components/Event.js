import React from ‘react’ — /*you always need to import react*/
/*here is where we can import other child components or mongo collections (database)*/
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