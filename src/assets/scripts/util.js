import * as THREE from "three";
import createScene from "./scene";
import createRenderer from "./renderer";
import createCamera from "./camera";
import { BCG, WIDTH, HEIGHT, CAMERA_FAR } from "./variables";

// import { WIDTH, HEIGHT } from "./variables";

function init(){

    let scene = createScene(THREE, BCG),
    renderer = createRenderer(THREE, WIDTH, HEIGHT),
    camera = createCamera(THREE, WIDTH, HEIGHT, CAMERA_FAR);

    console.log(" hello from init" + scene + " " + camera + " " + renderer);

    return {
        scn: scene,
        ren: renderer,
        cam: camera
    };

}

function animate(renderer, scene, camera){
    
    // console.log("animate function: " + renderer);
    if(camera == undefined || scene == undefined || renderer == undefined){
        return;
    }
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function start() {

    let setupObj = init();
    animate(setupObj.ren, setupObj.scn, setupObj.cam);

}

export default start;


