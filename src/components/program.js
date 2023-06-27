import React from "react";
class program extends React.Component{
    constructor(name, bC, shape, stat)
    {
        this.name = name;
        this.bC = bC;
        this.shape = shape;
        this.stat = stat;
        // call shapes from imports
        this.shapeImage = () => {
            
        };
    }

    blockImage()
    {
        return this.shapeImage();
    }

    NCall()
    {
        return this.name += " PROGRAM";
    }

}