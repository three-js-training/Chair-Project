// import { CHAIR_MODEL } from "./variables";

function loadModel(scene, GLTFLoader, CHAIR_MODEL){

    let loader = new GLTFLoader(),
        chair;
    
    loader.load(CHAIR_MODEL, function(model){

        chair = model.scene();
        chair.scale.set(2, 2, 2);
        scene.add(chair);

        console.log("model has successfully loaded but it needs lighting to be seen.");

        return chair;

    }, undefined, function(error){

        console.log(error);

    });

};

export default loadModel;