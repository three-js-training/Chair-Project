import { CHAIR_MODEL } from "./variables";
import modelChair from "../chair.glb";

function loadModel(GLTFLoader, scene){
    let loader = new GLTFLoader(),
        chair;
    
    loader.load(modelChair, function(model){
    console.log("hi 1 from loadmodel()");

        chair = model.scene;
    console.log("hi 2 from loadmodel()");

        chair.scale.set(2, 2, 2);
    console.log("hi 3 from loadmodel()");

        scene.add(chair);

        console.log("model has successfully loaded but it needs lighting to be seen.");

        return chair;

    }, undefined, function(error){

        // console.log("error " + error);

    });

};

export default loadModel;