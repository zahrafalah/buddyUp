import React from 'react';
import { render } from 'react-dom';
import NavBar from '../components/Navbar.jsx';
import style from '../../../client/styles.js';

class AppLayout extends React.Component {

    constructor(props) {
      console.log(props);
      super(props);
      this.state = Store.getState();
    }
  
    componentWillMount(){
      console.log(this.state);
    }
  
    componentDidMount(){
      Store.subscribe(this._getState.bind(this));
      
      console.log(this.state);
    }
  
    _getState (){
      console.log("Getting State")
      this.setState(Store.getState());
    }
  
    render(){
  
      return (
        
          <div>
            <NavBar {...this.state}/>
            <div className="container">
              {this.props.children && React.cloneElement(this.props.children, this.state)}
            </div>
            <DrawerLeft {...this.state}/>
            <SnackbarContainer {...this.state}/>
          </div>
       
      );
    }
  
  }
  
  module.exports = AppLayout;