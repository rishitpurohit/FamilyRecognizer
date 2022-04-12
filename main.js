//https://teachablemachine.withgoogle.com/models/
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
        document.getElementById("result").innerHTML = "<img id = 'selfie_image' src = '"+data_uri+"'/>";
    });
}
function check(){
    img = document.getElementById("selfie_image");
    classifier.classify(img , gotResult);
   

}
function gotResult(error ,  results){
if(error){
    console.log(error);
}
else{
    console.log(results);
}
document.getElementById("result_object_name").innerHTML = results[0].label
document.getElementById("result_object_confidence").innerHTML = results[0].confidence*100+"%";
}
