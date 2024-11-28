// Three.js Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(0.2, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

// Track AWB Functionality
function trackAWB() {
  const awb = document.getElementById('awb').value;
  const result = document.getElementById('track-result');
  if (awb) {
    result.innerText = `Tracking AWB: ${awb} - In Transit`;
  } else {
    result.innerText = 'Please enter a valid AWB number.';
  }
}
