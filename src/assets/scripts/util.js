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
    console.log(CHAIR_MODEL)


    return {
        scn: scene,
        ren: renderer,
        cam: camera
    };

}

function animate(renderer, scene, camera){
    
    if(camera == undefined){
        console.log("camera issue")
        // return;
    }

    if(scene == undefined ){
        console.log("scene issue")
    }

    if(renderer == undefined){
        console.log("renderer issue");
    }

    console.log(scene, camera);
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function start() {

    let setupObj = init();
    loadModel(GLTFLoader, setupObj.scene);
    animate(setupObj.ren, setupObj.scn, setupObj.cam);

}

export default start;


