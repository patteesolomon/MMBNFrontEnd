
import React, { useRef, useEffect } from 'react';

const Canvas = (props, dx, dy) => {

    const canvasRef = useRef(null);

    const draw = ctx => {
        const image = new Image();
        image.src = ctx;
        image.onload = () => {
            ctx.drawImage(image, dx, dy);
        };
    };

    useEffect(() => {
    
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
    
        //Our draw come here
        draw(context);
    }, [draw,dx,dy]);

    return <canvas ref={canvasRef} {...props} />
};

export default Canvas;