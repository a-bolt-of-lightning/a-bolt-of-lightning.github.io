'use strict';

/* global THREE */





function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
  renderer.setSize(window.innerWidth,window.innerHeight);

  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, window.innerWidth/window.innerHeight, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();

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
  for(i=0; i<30; i++){
    const boxWidth = 0.1;
    const boxHeight = 0.1;
    const boxDepth = 0.1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);  
    var geo = new THREE.BoxGeometry(0.1, 0.1, 2);
    cubes[i] = makeInstance(geometry, Math.random() * 0xffffff,-15+i);
	}
	
	var animateAll = function(){
    for(i=0; i<length; i++){
        longCubesArray[i].rotation.x +=0.008*(20-i);
        longCubesArray[i].rotation.y +=0.01;
    }
    renderer.render(scene,camera);
    requestAnimationFrame(animateAll);
}
	

}

main();
animateAll();