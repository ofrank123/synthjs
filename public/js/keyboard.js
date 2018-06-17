var z, s, x, d, c, v, g, b, h, n, j, m
var s
$(document).keypress(function(event){
    console.log(event.which)

    var charCode = event.which
    if (charCode == 122){ //z
	if(z === undefined) {
	    
	    console.log("test")
	    z = startOsc(getBaseOctave()*12 + 12 );
	}
    }
    else if (charCode == 115){ //s
	if( s === undefined)
	    console.log("test")
	s = startOsc(getBaseOctave()*12 + 12  + 1);
    }
    else if (charCode == 120){ //x
	if( x === undefined)	
	    x = startOsc(getBaseOctave()*12 + 12  + 2);
    }
    else if (charCode == 100){ //d
	if( d === undefined)	
	    d= startOsc(getBaseOctave()*12 + 12  + 3);
    }
    else if (charCode == 99){ //c
	if( c === undefined)	
	    c= startOsc(getBaseOctave()*12 + 12  + 4);
    }
    else if (charCode == 118){ //v
	if( v === undefined)	
	    v= startOsc(getBaseOctave()*12 + 12  + 5);
    }
    else if (charCode == 103){ //g
	if( g === undefined)	
            g= startOsc(getBaseOctave()*12 + 12  + 6); 
    }
    else if (charCode == 98){ //b
	if( b === undefined)	
            b= startOsc(getBaseOctave()*12 + 12  + 7); 
    }
    else if (charCode == 104){ //h
	if( h === undefined)	
            h= startOsc(getBaseOctave()*12 + 12  + 8); 
    }
    else if (charCode == 110){ //n
	if( n === undefined)	
            n= startOsc(getBaseOctave()*12 + 12  + 9); 
    }
    else if (charCode == 106){ //j
	if( j === undefined)	
            j= startOsc(getBaseOctave()*12 + 12  + 10); 
    }
    else if (charCode == 109){ //m
	if( m === undefined)	
            m= startOsc(getBaseOctave()*12 + 12 + 11); 
    }
    
})

$(document).keyup(function(event){
    var charCode = event.which
    if (charCode == 90){ //z
	if(typeof z !== 'undefined') {	    
	    stopOsc(z)
	    z = undefined
	}
    }
    else if (charCode == 88){ //x
	if(typeof x !== 'undefined') {
	    stopOsc(x)
	    x = undefined
	}
    }
    else if (charCode == 67){
	if(typeof c !== 'undefined') {
	    stopOsc(c)
	    c = undefined
	}
    }
    else if (charCode == 86){
	if(typeof v !== 'undefined') {
	    stopOsc(v)
	    v = undefined
	}
    }
    else if (charCode == 66){
	if( typeof b!== 'undefined') {
	    stopOsc(b)
	    b = undefined
	}
    }
    else if (charCode == 78){
	if(typeof n !== 'undefined') {
	    stopOsc(n)
	    n = undefined
	}
    }

    else if (charCode == 77){
       if(typeof m !== 'undefined') {
	    stopOsc(m)
	    m = undefined
       }
    }
        else if (charCode == 83){ //s
	if(typeof s !== 'undefined') {
	    stopOsc(s)
	    s = undefined
	}
	}
        else if (charCode == 68){
	if(typeof d !== 'undefined') {
	    stopOsc(d)
	    d = undefined
	}
	}
        else if (charCode == 71){
	if(typeof g !== 'undefined') {
	    stopOsc(g)
	    g = undefined
	}
	}
        else if (charCode == 72){
	if(typeof h !== 'undefined') {
	    stopOsc(h)
	    h = undefined
	}
	}
        else if (charCode == 74){
	if(typeof j !== 'undefined') {
	    stopOsc(j)
	    j = undefined
	}
    }
})
