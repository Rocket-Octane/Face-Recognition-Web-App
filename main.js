Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpeg",
    jpeg_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src"+data_uri+">";
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
        document.getElementById("result_object_name").innerHTML = results[0].label;
        var x = results[0].confidence.toFixed(4);
        document.getElementById("result_accuracy_name").innerHTML = x * 100 + "%";
    }
}