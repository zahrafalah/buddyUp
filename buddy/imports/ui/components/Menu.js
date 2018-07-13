import React, {Component} from "react";


class Menu extends Component {

    render(){
        return(
        <div className="ui inverted segment">
            <div className="ui inverted secondary pointing menu">
                <a className="active item">Home</a>
                <a className="item">Work</a>
                <a className="item">Company</a>
                <a className="item">Careers</a>
            </div>
                    <div className="item">
                        <div className="ui inverted primary button">Login</div>
                    </div>
                    <div className="item">
                    <div className="ui inverted primary button">Log Out</div>
                     </div>
            </div>

         ) }
    
};

export default Menu