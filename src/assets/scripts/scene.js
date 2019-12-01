// import * as THREE from "three";
// import {scene} from './variables';

function createScene(THREE, BCG) {

  let scene = new THREE.Scene();
  scene.background = new THREE.Color(BCG);
  scene.fog = new THREE.Fog(BCG, 20, 100);

  return scene;
  
}

export default createScene;


