/*jshint esversion: 6 */

import {WHITE} from './variables';

function createLighting(THREE, scene) {

  const hemiLight = new THREE.HemisphereLight(WHITE, WHITE, 0.61);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(WHITE, 0.54);

  dirLight.position.set(-8, 12, 8);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);

  scene.add(dirLight);

}

export {createLighting};
