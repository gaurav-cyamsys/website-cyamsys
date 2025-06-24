console.log('Lenis available?', typeof Lenis);

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

const canvas = document.getElementById('model-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 2);
scene.add(light);

let model;
const loader = new THREE.GLTFLoader();
loader.load('control_low.glb', (gltf) => {
  model = gltf.scene;
  model.scale.set(1.5, 1.5, 1.5);
  model.position.set(0, -1, 0);

  model.traverse((node) => {
    if (node.isMesh && node.material) {
      node.material.metalness = 0.05;
      node.material.roughness = 0.9;
    }
  });

  scene.add(model);

  gsap.to(model.rotation, {
    y: Math.PI * 2,
    scrollTrigger: {
      trigger: '.product-overview',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    },
  });
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const triggerPoint = window.innerHeight;
  const mask = document.querySelector('.circular-mask');

  if (scrollY > triggerPoint) {
    mask.style.clipPath = 'circle(100% at 50% 50%)';
  } else {
    mask.style.clipPath = 'circle(0% at 50% 50%)';
  }
});
