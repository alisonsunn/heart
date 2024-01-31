import * as THREE from "three";

export default class THREEJS {
  // scene camera and renderer
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
  renderer = new THREE.WebGLRenderer({
  antialias: true
});

  constructor() {
    this.init();
    this.animate();
  }

  init = () => {
    this.cameraSetting();
    this.rendererSetting();
  }

  cameraSetting = () => {
    this.camera.position.z = 80;
  }

  rendererSetting = () => {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.id = "threejs_scene";
    document.querySelector("#app").appendChild(this.renderer.domElement);
  }

  render = () => {
    this.renderer.render(this.scene,this.camera);
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    if (this.model?.animate) this.model.animate();
    this.render();
    // console.log("animate")
  }

  addModel = (model) => {
    this.model = model;
    if (model?.mesh && model?.wireframeMesh) {
      this.scene.add(model.mesh)
      this.scene.add(model.wireframeMesh)
  }
}
}