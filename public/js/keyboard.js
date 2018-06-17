$(document).keypress(function(event){
  var charCode = event.which
  if (charCode == 90){ //z
    startOsc(getBaseOctave()*12);
  }
  else if (charCode == 88){
    startOsc(getBaseOctave()*12 + 1);
  }
  else if (charCode == 67){
    startOsc(getBaseOctave()*12 + 2);
  }
  else if (charCode == 86){
    startOsc(getBaseOctave()*12 + 3);
  }
  else if (charCode == 66){
    startOsc(getBaseOctave()*12 + 4);
  }
  else if (charCode == 78){
    startOsc(getBaseOctave()*12 + 5);
  }
  else if (charCode == 77){
    startOsc(getBaseOctave()*12 + 6); 
  }
})
