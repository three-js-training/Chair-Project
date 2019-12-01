// import {WIDTH, HEIGHT, cameraFar} from "./variables";

function createCamera(THREE, WIDTH, HEIGHT, CAMERA_FAR){
        
        const camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 0.1, 1000);
        camera.position.z = CAMERA_FAR;

        console.log(camera);

        return camera;
}

export default createCamera;
