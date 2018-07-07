<<<<<<< HEAD
=======
import React from "react";
import Images from "./Images.js";
import mosaic from "../../../imports/mosaic.json";
import ReactDOM from "react-dom";

state = {
    mosaic} 


scramble= (array) => {
  
    //shuffle algorithm is the Fisher-Yates
         var i = array.lenght;
         if ( i === 0 ) return false;
         while ( --i ) {
            var j = Math.floor( Math.random() * ( i + 1 ) );
            var tempi = array[i];
            var tempj = array[j];
            array[i] = tempj;
            array[j] = tempi;
          }

          newArray =array.slice(1,48);
       return newArray;
     }
   


ReactDOM.render(
	<div>
		<Images columns={8} photos={this.scramble(this.state.mosaic)} />
	</div>,

);

>>>>>>> d0753254cbc03b9293aa1e118623779f0e608a35
