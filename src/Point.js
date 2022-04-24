import Raf from './Raf';
import { RGBToHex, hslToRgb } from './utils';
import * as VAR from './variables';

/*--------------------
Point
--------------------*/
export default class Point extends Raf {
    constructor(obj) {
        super();
        Object.assign(this, obj);
        this.draw();
    }

    draw(playhead, time) {
        this.ctx.save();
        this.ctx.translate(this.x, this.y);

        const POINT_SCALE = 50;
        const NOISE_SCALE = 0.001;

        const n = this.simplex.noise3D(Math.sin(time) * this.x * NOISE_SCALE,
            Math.sin(time) * this.y * NOISE_SCALE,
            Math.sin(time * 0.2));

        // Size of the Point
        const t = Math.ceil((n + 1) / 2 * POINT_SCALE % VAR.cell);

        // Randomization of the color
        const h = 0.7 + ((t + 1) / 2) * 0.01;// 0.7 < h < 0.8
        const s = 1;
        const l = 0.5 + ((t + 1) / 2) * 0.02; // 0.50 < l < 0.70
        // hsl(290, 100%, 50%)
        this.ctx.fillStyle = '#70ffa2';
        this.ctx.fillStyle = RGBToHex(...hslToRgb(h, s, l));

        // for (let i = 0; i < t; i++) {
        // this.ctx.fillRect(Math.random() * cell,  Math.random() * cell, t, t)
        const centerCoord = Math.floor((VAR.cell) / 2);
        this.ctx.fillRect(centerCoord, centerCoord, t, t);
        // }
        this.ctx.fill();
        this.ctx.restore();
    }

    onRaf({ playhead, time }) {
        this.draw(playhead, time);
    }
}
