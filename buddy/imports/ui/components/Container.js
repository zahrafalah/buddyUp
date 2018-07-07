import React from "react";
import { Grid, Image } from 'semantic-ui-react';
import Images from "./Images.js";
import mosaic from "../../../imports/mosaic.json";
import "../../../client/style.css";



const ImageMosaic = props => (


    {this.state.mosaic.map(mosaic => (

      <Images
        id={mosaic.id}
        src={mosaic.image}
    


      />
    ))}


export default ImageMosaic;
