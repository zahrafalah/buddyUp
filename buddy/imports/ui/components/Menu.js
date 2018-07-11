import React, {Component} from "react";
import AccountsUIWrapper from AccountsUIWrapper;


class Menu extends Component {

    render(){
        return
        <div class="ui inverted segment">
            <div class="ui inverted secondary pointing menu">
                <a class="active item">Home</a>
                <a class="item">Work</a>
                <a class="item">Company</a>
                <a class="item">Careers</a>
            </div>
                <AccountsUIWrapper/>
                    <div class="item">
                        <div class="ui inverted primary button">Login</div>
                    </div>
                    <div class="item">
                    <div class="ui inverted primary button">Log Out</div>
                     </div>
            </div>

    }
    
};

export default Menu