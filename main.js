Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 100
}
);
var camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='image_capture' src='"+data_uri+"'>";
    });
}

console.log('ml5 version : ',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/58ZjZQJcO/model.json", modelLoaded);
function modelLoaded(){
console.log('modelLoaded');
}