//  import {WIDTH, HEIGHT} from "./variables";

 function createRenderer(THREE, WIDTH, HEIGHT){

    var canvas = document.querySelector("#canvas"),
         renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
         renderer.setSize(WIDTH, HEIGHT);

    document.body.appendChild(renderer.domElement);
    
    return renderer;

 }   

 export default createRenderer;
 