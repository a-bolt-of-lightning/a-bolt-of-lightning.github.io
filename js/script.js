
//things i have to add:
//music: spectral voice from a newborn star - the lost sun

var length = 80;

const canvas = document.querySelector('#c');
var scene = new THREE.Scene;
const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, window.innerWidth/window.innerHeight, near, far);
  camera.position.z = 2;
var renderer = new THREE.WebGLRenderer({canvas, antialias: true});
renderer.setSize(window.innerWidth,window.innerHeight);
$('body').append(renderer.domElement);

{
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }


  function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({color});

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    return cube;
}

var cubes=[];

var i;
for(i=0; i<length; i++){
const boxWidth = 0.1;
const boxHeight = 1.5;
const boxDepth = 0.01;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);  
var geo = new THREE.BoxGeometry(0.1, 0.1, 2);
cubes[i] = makeInstance(geometry, Math.random() * 0xffffff,(-1*(length/2)+i)*0.1);
cubes[i].rotation.x=i*0.08;
}

renderer.render(scene,camera);

var animateAll = function(){
    for(i=0; i<length; i++){
        cubes[i].rotation.x +=0.001*(length/2-i);
        //cubes[i].rotation.y +=0.01;
    }
    renderer.render(scene,camera);
    requestAnimationFrame(animateAll);
}

animateAll();
