camera = document.getElementById("camera");

function setTimeout(){
  image_id="selfie1";
  take_snapshot();
  speak_data="5";
  utterThis="speak_data";
  synth.speak(utterthis,5000);

}

function setTimeout(){
  image_id="selfie2";
  take_snapshot();
  speak_data="10";
  utterThis="speak_data";
  synth.speak(utterthis,10000);

}

function setTimeout(){
  image_id="selfie3";
  take_snapshot();
  speak_data="15";
  utterThis="speak_data";
  synth.speak(utterthis,15000);

}
      
Webcam.attach( camera );      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
  }
}

function take_snapshot(){
  console.log(img_id);
    Webcam.snap(function(data_uri) {
      if (img_id=="selfie1")) {
        document.getElementById("result1").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
      }
      if (img_id=="selfie2") {
        document.getElementById("result2").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
      }
      if (img_id=="selfie3") {
        document.getElementById("result3").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
      }
      if (img_id=="selfie4") {
        document.getElementById("result4").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
      }
      if (img_id=="selfie5") {
        document.getElementById("result5").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
      }
    }
  }

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    //write code to store the selfie_image in a variable img and then use classify() function to classify it
  
  }
