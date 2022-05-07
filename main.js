Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpeg",
    jpeg_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured image' src"+data_uri+">";
    });
}

console.log("ml5.js version: ", ml5.version);

var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Obt4kCYwl/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded");
}