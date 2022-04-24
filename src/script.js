import './style.scss';
import Canvas from 'canvas';
import Point from './Point';
import * as VAR from './variables';
/*--------------------
INIT
--------------------*/

document.addEventListener('DOMContentLoaded',()=>{
    const canvas = new Canvas({
        id: 'canvas',
    });

    for (let y = VAR.cell; y < VAR.height; y += VAR.cell) {
        for (let x = VAR.cell; x < VAR.width; x += VAR.cell) {
            const i = y * VAR.width / VAR.cell + x / VAR.cell;
            new Point({
                ctx: canvas.ctx,
                x,
                y,
                id: i,
                simplex:VAR.simplex,
            });
        }
    }
});
