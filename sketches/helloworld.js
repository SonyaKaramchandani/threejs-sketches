const content = document.querySelector("#content");
const renderer = new THREE.WebGLRenderer({antialias: true});

content.appendChild(renderer.domElement);

const width = content.clientWidth;
const height = content.clientHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 30;

const geometry = new THREE.SphereGeometry(15, 30, 15);
const material = new THREE.MeshNormalMaterial({wireframe: true});

const sphere = new THREE.Mesh(geometry, material);
sphere.rotation.x += 0.005;
scene.add(sphere);

function resize() {
    renderer.setSize(width, height, false);
    camera.as = width / height;
    camera.updateProjectionMatrix();
}

function animate() {
    resize();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    sphere.rotation.y += 0.01;
}

animate();
