const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);

camera.position.z = 80;

const renderer = new THREE.WebGLRenderer({
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.domElement.id = "threejs_scene";

document.querySelector("#app").appendChild(renderer.domElement)

renderer.render(scene, camera)

// create a heart shape
const x = 0, y = 0;
// const heartShape = new THREE.Shape();
heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

const geometry = new THREE.ShapeGeometry( heartShape );
const material = new THREE.MeshBasicMaterial( { color: "rgb(255, 182, 193)" } );
const mesh = new THREE.Mesh( geometry, material );
scene.add(mesh);

const wireframeMaterial = new THREE.MeshBasicMaterial({ 
  color: "rgb(255, 255, 255)", 
  wireframe: true 
});
const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
scene.add(wireframeMesh);

// render cycling
mesh.rotation.x = 2;
mesh.rotation.y = 2;

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.02;
  mesh.rotation.y += 0.02;
  mesh.rotation.z += 0.02;

  wireframeMesh.rotation.x = mesh.rotation.x;
  wireframeMesh.rotation.y = mesh.rotation.y;
  wireframeMesh.rotation.z = mesh.rotation.z;
  renderer.render(scene, camera);
}

animate();
