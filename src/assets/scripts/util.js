import * as THREE from "three";
import GLTFLoader from "three-gltf-loader";
import createScene from "./scene";
import createRenderer from "./renderer";
import createCamera from "./camera";
import loadModel from "./loadModel";
import { BCG, WIDTH, HEIGHT, CHAIR_MODEL, CAMERA_FAR } from "./variables";

function init(){

    let scene = createScene(THREE, BCG),
    renderer = createRenderer(THREE, WIDTH, HEIGHT),
    camera = createCamera(THREE, WIDTH, HEIGHT, CAMERA_FAR);

    return {
        scn: scene,
        ren: renderer,
        cam: camera
    };

}

function animate(renderer, scene, camera){
    
    if(camera == undefined || scene == undefined || renderer == undefined){
        return;
    }
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function start() {

    console.log(CHAIR_MODEL)
    let setupObj = init();
    animate(setupObj.ren, setupObj.scn, setupObj.cam);
    loadModel(THREE, GLTFLoader, setupObj.scene, CHAIR_MODEL);

}

export default start;


