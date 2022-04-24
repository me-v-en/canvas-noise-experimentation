
import SimplexNoise from 'simplex-noise';

// Initial vars
const width = Math.min(window.innerWidth, 400);
const height = Math.min(window.innerHeight, 200);

const cell = 10;
const simplex = new SimplexNoise();

export {width, height, simplex, cell};