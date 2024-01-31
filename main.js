import './style.scss';
import THREEJS from "./src/main_class.js";
import MESH from './src/mesh.js';

const app = new THREEJS();
const heart = new MESH();

app.addModel(heart);