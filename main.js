import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { Camera } from 'three';
import { gsap } from "gsap";

const canvas = document.querySelector('canvas.webgl');
let canplay = true;

const scene = new THREE.Scene();

const loader = new THREE.TextureLoader();

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha:true
})
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Sets the color of the background
renderer.autoClear = false;

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const geometry = new THREE.CylinderGeometry( 0.7, 0.7, 0.3, 32 );
const material = new THREE.MeshBasicMaterial( { 
  color: 'rgb(166%, 40%, 31%)',
 } );
const torus = new THREE.Mesh( geometry, material );
scene.add( torus );


const torus2 = new THREE.Mesh( geometry, material);
scene.add( torus2 );


const torus3 = new THREE.Mesh( geometry, material );
scene.add( torus3 );

const torus4 = new THREE.Mesh( geometry, material );
scene.add( torus4 );

const geometry2 = new THREE.CapsuleGeometry( 0.3, 1, 20, 30 );
const material2 = new THREE.PointsMaterial( {color: 'white', size:0.1} );
const capsuleobj = new THREE.Points( geometry2, material2 );
capsuleobj.position.set(8, 3.5, 0)
const capsuleobj2 = new THREE.Points( geometry2, material2 );
capsuleobj2.position.set(8, -3.5, 0)
const capsuleobj3 = new THREE.Points( geometry2, material2 );
capsuleobj3.position.set(-8, 3.5, 0)
const capsuleobj4 = new THREE.Points( geometry2, material2 );
capsuleobj4.position.set(-8, -3.5, 0)
const material3 = new THREE.MeshBasicMaterial({map: loader.load('./shader.png') })
const capsuleobj5 = new THREE.Mesh(geometry2, material3);

// capsuleobj5.rotation.y = 10;
scene.add( capsuleobj );
scene.add( capsuleobj2 );
scene.add( capsuleobj3 );
scene.add( capsuleobj4 );
scene.add(capsuleobj5);


// Sets orbit control to move the camera around
// const orbit = new OrbitControls(camera, renderer.domElement);

// Camera positioning
camera.position.set(0, 0, 11);
// orbit.update();

// const light = new THREE.AmbientLight(`rgb(10%, 7%, 0%)`);
// light.position.set( 50, 50, 50 );
// scene.add( light );


function animate() {

    renderer.render(scene, camera);
    torus.rotation.x += 0.03 * 0.2
    torus.rotation.y += 0.03 * 0.2
    torus.rotation.z += 0.03 * 0.2
    torus.position.y += 0.03 * 0.2;
    torus.position.x+=0.03 * 0.2;

    if(canplay){
      gsap.to(capsuleobj5.rotation, { duration: 10, z:-0.8 * 4, ease:'elastic', delay:2});
      gsap.to(capsuleobj5.rotation, { duration: 10, y:-0.8 * 4, ease:'elastic', delay:2});
      gsap.to(capsuleobj5.position, { duration: 2, y:0.5, ease:'elastic', delay:2.5});
      gsap.to(capsuleobj5.position, { duration: 1.5, y:-0.5, ease:'elastic', delay:4.5});
      gsap.to(capsuleobj5.rotation, { duration: 10, z:0.8 * 4, ease:'elastic', delay:5});
      gsap.to(capsuleobj5.rotation, { duration: 10, y:0.8 * 4, ease:'elastic', delay:5});
}
    if(torus.position.y > 5){
      torus.position.y = -5;
      torus.position.x = -10;
      canplay = true;
    }else{
      canplay = false;
    }
    torus2.rotation.x += 0.03 * 0.2
    torus2.rotation.y += 0.03 * 0.2
    torus2.rotation.z += 0.03 * 0.2
    torus2.position.y -= 0.03 * 0.2;
    torus2.position.x-=0.03 * 0.2;
    if(torus2.position.y < -5){
        torus2.position.y = 5;
        torus2.position.x = 10;
      }

    torus3.rotation.x += 0.03 * 0.2
    torus3.rotation.y += 0.03 * 0.2
    torus3.rotation.z += 0.03 * 0.2
    torus3.position.y += 0.03 * 0.2;
    torus3.position.x-=0.03 * 0.2;
    if(torus3.position.y > 5){
          torus3.position.y = -5;
          torus3.position.x = 10;
        }

    torus4.rotation.x += 0.03 * 0.2
    torus4.rotation.y += 0.03 * 0.2
    torus4.rotation.z += 0.03 * 0.2
    torus4.position.y -= 0.03 * 0.2;
    torus4.position.x+=0.03 * 0.2;
    if(torus4.position.y < -5){
      torus4.position.y = 5;
      torus4.position.x = -10;
    }
    
}



renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    

});







const medic = document.querySelector('.symptom');
const Meds = document.querySelector('.Meds');
const capsule = document.querySelectorAll('.capsule');
const circle = document.querySelectorAll('.circle');
const medcontainer = document.querySelector('.medcontainer');
const circontainer = document.querySelector('.circontainer');
const overallcontainer = document.querySelector('.overallcontainer');
const nomen = document.querySelector('.nomen');
const chevron = document.querySelector('.scroll');
const but = document.querySelector('.darkbutton');
let dark = true;
window.addEventListener('scroll',function(){
  console.log(chevron.getBoundingClientRect().top);
  if(chevron.getBoundingClientRect().top < 424){
    chevron.style.animation = `fadeOutDown 1s 1  forwards`;
  } if(chevron.getBoundingClientRect().top > 424){
    chevron.style.animation = `fadeInUp 1s 1  forwards`
  }
})

window.addEventListener('scroll', function (e) {
  let t = medic.getBoundingClientRect().top;
  let o = Meds.getBoundingClientRect().top;
  let p = nomen.getBoundingClientRect().top;
  capsule.forEach(e =>{
    e.style.transform = `rotate(${t}deg)`
  })
  circle.forEach(e =>{
    e.style.transform = `rotate(${t}deg)`
  })
  medcontainer.style.top = `${p-300}px`
  circontainer.style.top = `${o+1200}px`
  overallcontainer.style.top = `${t+800}px`

  medcontainer.style.visibility = `visible`;
  circontainer.style.visibility = `visible`;
  overallcontainer.style.visibility = `visible`;

  
})

but.addEventListener('click', function(){
  if(!dark){
  document.body.classList.add('bg-slate-800');
  document.body.classList.add('text-white');
  but.textContent = 'Dark'
  dark = true;
  }else{
    document.body.classList.remove('bg-slate-800');
    document.body.classList.remove('text-white');
    but.textContent = 'Light'
    dark = false;
  }
})