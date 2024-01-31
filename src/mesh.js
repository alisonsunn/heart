import * as THREE from "three";

export default class MESH {
  heartShape = new THREE.Shape();
  material = new THREE.MeshBasicMaterial( { color: "rgb(255, 182, 193)" } );

  wireframeMaterial = new THREE.MeshBasicMaterial({ 
    color: "rgb(255, 255, 255)", 
    wireframe: true 
  });

  mesh = null;
  wireframeMesh = null;

  createHeart = () => {
    const x = 0, y = 0;
    this.heartShape.moveTo( x + 5, y + 5 );
    this.heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    this.heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    this.heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    this.heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    this.heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    this.heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
  }

  constructor(geometry, material, wireframeMaterial) {
    this.createHeart();
    this.geometry = new THREE.ShapeGeometry( this.heartShape );
    this.init(geometry, material, wireframeMaterial);
    this.initCycling();
  }

  init = (geometry, material, wireframeMaterial) => {
    if (geometry) this.geometry = geometry;
    if (material) this.material = material;
    if (wireframeMaterial) this.wireframeMaterial = wireframeMaterial;

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.wireframeMesh = new THREE.Mesh(this.geometry, this.wireframeMaterial);
  }

  initCycling = () => {
    this.mesh.rotation.x = 2;
    this.mesh.rotation.y = 2;
  }

  animate = () => {
    this.mesh.rotation.x += 0.02;
    this.mesh.rotation.y += 0.02;
    this.mesh.rotation.z += 0.02;

    this.wireframeMesh.rotation.x = this.mesh.rotation.x;
    this.wireframeMesh.rotation.y = this.mesh.rotation.y;
    this.wireframeMesh.rotation.z = this.mesh.rotation.z;
  }
}