var z1, s1, x1, d1, c1, v1, g1, b1, h1, n1, j1, m1
var z2, s2, x2, d2, c2, v2, g2, b2, h2, n2, j2, m2
var z3, s3, x3, d3, c3, v3, g3, b3, h3, n3, j3, m3

$(document).keypress(function(event){
    console.log(event.which)

    var charCode = event.which
    if (charCode == 122){ //z
	if(z1 === undefined) {
	    z1 = startOsc1(getBaseOctave()*12 + 12 );
	    z2 = startOsc2(getBaseOctave()*12 + 12 );
	    z3 = startOsc3(getBaseOctave()*12 + 12 );
	}
    }
    else if (charCode == 115){ //s
	if(s1 === undefined) {
	    s1 = startOsc1(getBaseOctave()*12 + 12 + 1);
	    s2 = startOsc2(getBaseOctave()*12 + 12 + 1);
	    s3 = startOsc3(getBaseOctave()*12 + 12 + 1);
	}
    }
    else if (charCode == 120){ //x
	if(x1 === undefined) {
	    x1 = startOsc1(getBaseOctave()*12 + 12 + 2);
	    x2 = startOsc2(getBaseOctave()*12 + 12 + 2);
	    x3 = startOsc3(getBaseOctave()*12 + 12 + 2);
	}
    }
    else if (charCode == 100){ //d
	if(d1 === undefined) {
	    d1 = startOsc1(getBaseOctave()*12 + 12 + 3);
	    d2 = startOsc2(getBaseOctave()*12 + 12 + 3);
	    d3 = startOsc3(getBaseOctave()*12 + 12 + 3);
	}
    }
    else if (charCode == 99){ //c
	if(c1 === undefined) {
	    c1 = startOsc1(getBaseOctave()*12 + 12 + 4);
	    c2 = startOsc2(getBaseOctave()*12 + 12 + 4);
	    c3 = startOsc3(getBaseOctave()*12 + 12 + 4);
	}
    }
    else if (charCode == 118){ //v
	if(v1 === undefined) {
	    v1 = startOsc1(getBaseOctave()*12 + 12 + 5);
	    v2 = startOsc2(getBaseOctave()*12 + 12 + 5);
	    v3 = startOsc3(getBaseOctave()*12 + 12 + 5);
	}
    }
    else if (charCode == 103){ //g
	if(g1 === undefined) {
	    g1 = startOsc1(getBaseOctave()*12 + 12 + 6);
	    g2 = startOsc2(getBaseOctave()*12 + 12 + 6);
	    g3 = startOsc3(getBaseOctave()*12 + 12 + 6);
	}
    }
    else if (charCode == 98){ //b
	if(b1 === undefined) {
	    b1 = startOsc1(getBaseOctave()*12 + 12 + 7);
	    b2 = startOsc2(getBaseOctave()*12 + 12 + 7);
	    b3 = startOsc3(getBaseOctave()*12 + 12 + 7);
	}
    }
    else if (charCode == 104){ //h
	if(z1 === undefined) {
	    h1 = startOsc1(getBaseOctave()*12 + 12 + 8);
	    h2 = startOsc2(getBaseOctave()*12 + 12 + 8);
	    h3 = startOsc3(getBaseOctave()*12 + 12 + 8);
	}
    }
    else if (charCode == 110){ //n
	if(n1 === undefined) {
	    n1 = startOsc1(getBaseOctave()*12 + 12 + 9);
	    n2 = startOsc2(getBaseOctave()*12 + 12 + 9);
	    n3 = startOsc3(getBaseOctave()*12 + 12 + 9);
	} 
    }
    else if (charCode == 106){ //j
	if(j1 === undefined) {
	    j1 = startOsc1(getBaseOctave()*12 + 12 + 10);
	    j2 = startOsc2(getBaseOctave()*12 + 12 + 10);
	    j3 = startOsc3(getBaseOctave()*12 + 12 + 10);
	}
    }
    else if (charCode == 109){ //m
	if(m1 === undefined) {
	    m1 = startOsc1(getBaseOctave()*12 + 12 + 11);
	    m2 = startOsc2(getBaseOctave()*12 + 12 + 11);
	    m3 = startOsc3(getBaseOctave()*12 + 12 + 11);
	}
    }
    
})

$(document).keyup(function(event){
    var charCode = event.which
    if (charCode == 90){ //z
	if(typeof z1 !== 'undefined') {	    
	    stopOsc(z1)
	    z1 = undefined
	    stopOsc(z2)
	    z2 = undefined
	    stopOsc(z3)
	    z3 = undefined	    
	}
    }
    else if (charCode == 88){ //x
	if(typeof x1 !== 'undefined') {	    
	    stopOsc(x1)
	    x1 = undefined
	    stopOsc(x2)
	    x2 = undefined
	    stopOsc(x3)
	    x3 = undefined	    
	}
    }
    else if (charCode == 67){
	if(typeof c1 !== 'undefined') {	    
	    stopOsc(c1)
	    c1 = undefined
	    stopOsc(c2)
	    c2 = undefined
	    stopOsc(c3)
	    c3 = undefined	    
	}
    }
    else if (charCode == 86){
	if(typeof v1 !== 'undefined') {	    
	    stopOsc(v1)
	    v1 = undefined
	    stopOsc(v2)
	    v2 = undefined
	    stopOsc(v3)
	    v3 = undefined	    
	}
    }
    else if (charCode == 66){
	if(typeof b1 !== 'undefined') {	    
	    stopOsc(b1)
	    b1 = undefined
	    stopOsc(b2)
	    b2 = undefined
	    stopOsc(b3)
	    b3 = undefined	    
	}
    }
    else if (charCode == 78){
	if(typeof n1 !== 'undefined') {	    
	    stopOsc(n1)
	    n1 = undefined
	    stopOsc(n2)
	    n2 = undefined
	    stopOsc(n3)
	    n3 = undefined	    
	}
    }

    else if (charCode == 77){
	if(typeof m1 !== 'undefined') {	    
	    stopOsc(m1)
	    m1 = undefined
	    stopOsc(m2)
	    m2 = undefined
	    stopOsc(m3)
	    m3 = undefined	    
	}
    }
    else if (charCode == 83){ //s
	if(typeof s1 !== 'undefined') {	    
	    stopOsc(s1)
	    s1 = undefined
	    stopOsc(s2)
	    s2 = undefined
	    stopOsc(s3)
	    s3 = undefined	    
	}
    }
    else if (charCode == 68){
	if(typeof d1 !== 'undefined') {	    
	    stopOsc(d1)
	    d1 = undefined
	    stopOsc(d2)
	    d2 = undefined
	    stopOsc(d3)
	    d3 = undefined	    
	}
    }
    else if (charCode == 71){
	if(typeof g1 !== 'undefined') {	    
	    stopOsc(g1)
	    g1 = undefined
	    stopOsc(g2)
	    g2 = undefined
	    stopOsc(g3)
	    g3 = undefined	    
	}
    }
    else if (charCode == 72){
	if(typeof h1 !== 'undefined') {	    
	    stopOsc(h1)
	    h1 = undefined
	    stopOsc(h2)
	    h2 = undefined
	    stopOsc(h3)
	    h3 = undefined	    
	}
    }
    else if (charCode == 74){
	if(typeof j1 !== 'undefined') {	    
	    stopOsc(j1)
	    j1 = undefined
	    stopOsc(j2)
	    j2 = undefined
	    stopOsc(j3)
	    j3 = undefined	    
	}
    }
})
