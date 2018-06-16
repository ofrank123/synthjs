var audioCtx = new AudioContext();

var osc1 = audioCtx.createOscillator();
var lfo = audioCtx.createOscillator();
//gainNode.connect(osc1);
lfo.frequency.value = 2.0;
var gainNode = audioCtx.createGain();
lfo.type = 'sine';
lfo.connect(gainNode.gain);

osc1.connect(gainNode);
gainNode.connect(audioCtx.destination);
//osc1.connect(audioCtx.destination);
//osc1.type = 'sine';
//osc1.frequency.value = 600;

//gainNode.gain.value = .2;



var keys = [];
keys = {
    0  : 32.703, //C1
    1 : 34, //C1#
    2  : 36.708, //D1
    3  : 38.891, //D1#
    4  : 41.203, //E1
    5  : 43.654, //F1
    6 :46.249, //F1#
    7  : 48.999, //G1
   8  : 51.913, //G1#
   9 : 55.000, //A1
   10  : 58.270, //A1#
   11  : 61.735, //B1
    12 : 65.406, //C2
   13  :69.296, //C2#
   14 : 73.416, //D2
   15 : 77.782, //D2#
   16  :82.407, //E2
   17  : 87.307, //F2
  18  : 92.499, //F2#
    19  : 97.999, //G2
   20  :103.83, //G2#
   21  : 110.00, //A2
   22  : 116.54, //A2#
   23  :123.47, //B2
   24  : 130.81, //C3
  25  : 138.59,   // C3#
   26  : 146.83, //D3
  27  : 155.56,  //D3#
   28: 164.81, //E3
   29  : 174.61, //F3
   30  : 185.00, //F3#
   31 : 196.00, //G3
   32  : 207.65, // G3#
  33  :220.00, // A3
  34  : 233.08, // A3#
   35  : 246.94, //B3
   36  : 261.63, //C4
   37 : 277.18, //C4#
   38  : 293.66, //D4
   39  : 311.13, //D4#
   40  : 329.63, //E4
   41  : 349.23, //F4
   42  : 369.99, //F4#
   43  : 392.00, //G4
   44 : 415.30, //G4#
   45  : 440.00, //A4
   46 : 466.16, //A4#
  47  : 493.88, // B4
   48 : 523.25, // C5
    49 : 554.37,    // C5#
   50 : 587.33, // D5
   51: 622.25, // D5#
   52: 659.25, // E5
   53 : 698.46, // F5
   54  : 739.99, // F5#
   55: 783.99, // G5
   56  : 830.61, // G5#
   57 :880.00, // A5
   58  : 932.33, // A5#
  59: 987.77,  // B5
   60: 1046.5, // C6
   61 : 1108.7, // C6#
   62  : 1174.7, // D6
   63  : 1244.5, // D6#
   64 : 1318.5, // E6
   65 : 1396.9,  // F6
   66  : 1480.0, // F6#
   67: 1568.0, // G6
  68: 1661.2,  // G6#
   69: 1760.0, // A6
  70: 1864.7,  // A6#
   71 :1979.5, // B6
   72: 2093.0, // C7
  73 : 2217.5,  // C7#
  74  : 2349.3,  // D7
   75 : 2489.0, // D7#
   76  : 2637.0, // E7
  77 : 2793.8,  // F7
   78  : 2960.0, // F7#
   79  :3136.0, // G7
   80:  3322.4, // G7#
  81  :3520.0,  // A7
   82: 3729.3,  // A7#
   83 : 3951.1 // B7
}

function playNote(note){
    console.log(keys[note]);
    osc1.frequency.value = keys[note];
    osc1.start();
    lfo.start();
}

function stopNote(note){
    console.log(keys[note]);
    osc1.frequency.value = keys[note];
    osc1.stop();
    lfo.stop();
}


playNote("45");
//osc1.start();
