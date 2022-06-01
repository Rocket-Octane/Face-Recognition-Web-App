Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpeg",
    jpeg_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');
console.log("ready to take snapshot (webcam attached)");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        console.log("taking snapshot");
        document.getElementById("result").innerHTML = "<img id='captured_image' src="+data_uri+">";
    });
}

console.log("ml5.js version: ", ml5.version);

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Obt4kCYwl/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_person_name").innerHTML = results[0].label;
        document.getElementById("result_person_accuracy").innerHTML = (results[0].confidence * 100).toFixed(2) + "%";
    }
}