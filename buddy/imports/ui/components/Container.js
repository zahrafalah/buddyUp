import React from "react";
import { Grid, Image } from 'semantic-ui-react';
import Images from "./Images.js";
import mosaic from "../../../imports/mosaic.json";
import "../../../client/style.css";

let n=50;
const imageArr =  Array.from({length: n}, (v, k) => Math.floor(Math.random()*104));

const photosObj = JSON.parse(mosaic);


const photos = [
    [
        {
            id : photosObj.id[imageArr[1]], 
            src :photosObj.src[imageArr[1]],
                  },
       
]


ReactDOM.render(
	<div>
		<Images columns={8} photos={mosaic} />
	</div>,



