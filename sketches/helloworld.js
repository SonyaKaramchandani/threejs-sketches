const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setClearColor("#000");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


const geometry = new THREE.SphereGeometry(15, 30, 15);
const material = new THREE.MeshNormalMaterial({
    wireframe: true,
    // flatShading: true
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    sphere.rotation.x += 0.005
    sphere.rotation.y += 0.01;
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.as = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

animate();