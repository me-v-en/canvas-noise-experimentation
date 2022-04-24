import Raf from './Raf';
import * as VAR from './variables';
/*--------------------
Canvas
--------------------*/
export default class Canvas extends Raf {
    constructor(obj) {
        super();

        // Get the element and attach the 2d context
        this.canvas = document.getElementById(obj.id);
        this.ctx = this.canvas.getContext('2d');

        // Init the dimensions of the canvas
        this.resize();
        this.events();
    }

    resize() {
        this.dpr = window.devicePixelRatio;
        this.canvas.style.width = `${VAR.width}px`;
        this.canvas.style.height = `${VAR.height}px`;
        this.canvas.width = VAR.width * this.dpr;
        this.canvas.height = VAR.height * this.dpr;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.dpr, this.dpr);
    }

    events() {
        window.addEventListener('resize', this.resize);
    }

    clear() {
    // Clear the surface of the canvas
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    onRaf() {
    // Clear the canvas every frame
        this.clear();
    }
}