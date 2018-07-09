import React, {Component} from "react";
import PhotoGrid from "react-photo-feed";
import "react-photo-feed/library/style.css";
import mosaic from '../../../imports/mosaic.json'

class BackgroundImage extends Component {

    state = {
        mosaic
    };


    scramble = (array) => {

        var len = array.length;
        var newArray = [];

        for (var i = 0; i < 45; i++) {
            var picked = Math.floor(Math.random() * len);
            newArray[i] = array[picked];

            for (var k = 0; k <= i - 1; k++) {
                if (newArray[k] == newArray[i]) {
                    i--; // duplicate found so decrement i
                }
            }
        }

        return newArray;
    };

    render() {
        return ( <PhotoGrid columns = {9} photos = {this.scramble(this.state.mosaic)}/>);
        }

    };

   

    export default BackgroundImage