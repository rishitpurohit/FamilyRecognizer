// https://teachablemachine.withgoogle.com/models/rBwYd9Qkh/
camera = document.getElementById("camera");
Webcam.set({
    height : 300,
    width:350,
    imageFormat:"png",
    png_quality:100
});
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'image' src = '"+data_uri+"'/>";
    });
}

