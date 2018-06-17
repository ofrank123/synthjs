
var octaves = {
    C1 : 0, //,,,
    C2 : 1, //,,
    C3 : 2, //,
    C4 : 3, //'
    C5 : 4, //''
    C6 : 5, //'''
    C7 : 6  //''''
}

var clefs = {
    G4 : 'G-2',
    F3 : 'F-4'
}

var MAX_OCTAVES =  octaves.C7;
var KEYS_PER_OCTAVE = 17;
var _displayedOctaves = 3;
var _startOctave = 3;
var _selectedClef = clefs.G4


function getSelectedClef() {
    return _selectedClef
}

function setSelectedClef(newClef) {
    var isF3 = newClef == clefs.F3
    var isG4 = newClef == clefs.G4
    if (!isF3 && !isG4) {
        console.log("Keyboard > setSelectedClef > clef not in predefined values")
    }
    _selectedClef = newClef

    var radioGroup = $('input[name="clef"]')
    radioGroup.val([_selectedClef]); //this does not work. dont know why

    return _selectedClef
}

function numberOfDisplayedOctaves() {
    return _displayedOctaves
}

function codeForKeyAtIndex(keyIndex, baseOctave, duration) {
    note = (baseOctave * 12) + keyIndex;
    
    return note
}

function htmlForKeyboardWithOctaves(numberOfOctaves, startOctave, showLabels, withShiftButtons, withNoteSelection, withClefSelection) {
    if (typeof(numberOfOctaves)==='undefined') numberOfOctaves = 3
    if (typeof(startOctave)==='undefined') startOctave = octaves.C4
    if (typeof(showLabels)==='undefined') showLabels = true
    if (typeof(withShiftButtons)==='undefined') withShiftButtons = true
    if (typeof(withNoteSelection)==='undefined') withNoteSelection = true
    if (typeof(withClefSelection)==='undefined') withClefSelection = true

    //back keys are seperated to fields sharp and flat; this enables specific input
    _displayedOctaves = limitToRange(numberOfOctaves, 1, MAX_OCTAVES)
    _startOctave = limitToRange(startOctave, octaves.C1, octaves.C6)

    var currentOctave = _startOctave

    var keyhoardHTML = '\
        <ul class="DA-PianoKeyboard">\n'
    for (var i = 0; i < _displayedOctaves; i++) {
        if (showLabels) {
            keyhoardHTML += '\
            <li class="whiteKey"><p>C' + (currentOctave + 1) + '</p></li>\n\
            <li class="blackKeyFlat"></li>\n'
        } else {
            keyhoardHTML += '\
            <li class="whiteKey"></li>\n\
            <li class="blackKeyFlat"></li>\n'
        }

        keyhoardHTML += '\
            <li class="whiteKey"></li>\n\
            <li class="blackKeyFlat"></li>\n\
            <li class="whiteKey"></li>\n\
            <li class="whiteKey"></li>\n\
            <li class="blackKeyFlat"></li>\n\
            <li class="whiteKey"></li>\n\
            <li class="blackKeyFlat"></li>\n\
            <li class="whiteKey"></li>\n\
            <li class="blackKeyFlat"></li>\n\
            <li class="whiteKey"></li>\n'
        currentOctave++
    }
    keyhoardHTML += '\
        </ul>\n'

    var html = '\
        <div class="DA-Keyboardcontainer">'
    if (withShiftButtons) {
        html += '\
            <button type="button" id="lowerOctave" onclick="lowerOctave()"><</button>\n'
            + keyhoardHTML + '\n\
            <button type="button" id="raiseOctave" onclick="raiseOctave()">></button>\n'
    } else {
        html +=  keyhoardHTML
    }
    html += '\
        </div>'


    if (withNoteSelection) {
        html = htmlForNotesSelection() + '\n' + html
    }
    if (withClefSelection) {
        html = htmlForClefSelection() + '\n' + html
    }

    return html
}

function htmlForNotesSelection() {
    var html = ''

    html += '\n\
    <div id="DA-NoteSelection" class="DA-NoteClefSelection">\n\
        <input type="radio" name="notes" id="note-1-1" value="1">\n\
        <label for="note-1-1" >1/1</label>\n\
        \
        <input type="radio" name="notes" id="note-1-2" value="2">\n\
        <label for="note-1-2" >1/2</label>\n\
        \
        <input type="radio" name="notes" id="note-1-4" checked value="4">\n\
        <label for="note-1-4" >1/4</label>\n\
        \
        <input type="radio" name="notes" id="note-1-8" value="8">\n\
        <label for="note-1-8" >1/8</label>\n\
        \
        <input type="radio" name="notes" id="note-1-16" value="6">\n\
        <label for="note-1-16" >1/16</label>\n\
        \
        <input type="radio" name="notes" id="note-1-32" value="3">\n\
        <label for="note-1-32" >1/32</label>\n\
    </div>'

    return html
}




function bindClefSelectionToFunction(callback) {

    $("#DA-ClefSelection input").click(function () {

        var selectedRadioBox = $("#DA-ClefSelection input[type='radio']:checked")
        if (selectedRadioBox.length > 0) {
            _selectedClef = selectedRadioBox.val();
        }

        callback(this, _selectedClef)
    })
    
}

function bindKeyDownToFunction(callback) {
    $(".DA-PianoKeyboard li").mousedown(function () {
        var indexOfKey = $(this).index()

        var noteDuration = 4;
        var selectedRadioBox = $("#DA-NoteSelection input[type='radio']:checked")
        if (selectedRadioBox.length > 0) {
            noteDuration = selectedRadioBox.val();
        }

        var note = codeForKeyAtIndex(indexOfKey, _startOctave, noteDuration)
        callback(this, note)
    })
}

function bindKeyUpToFunction(callback) {
    $(document).mouseup(function () {
        callback(this)
    })
}

function raiseOctave() {
    _startOctave = Math.min(_startOctave + 1, MAX_OCTAVES - numberOfDisplayedOctaves() + 1)
    updateOctaveLabels()
    updateShiftOctaveButtonsEnabled()
}

function lowerOctave() {
    _startOctave = Math.max(_startOctave - 1, 0)
    updateOctaveLabels()
    updateShiftOctaveButtonsEnabled()
}

function updateShiftOctaveButtonsEnabled() {
    var isMax = _startOctave == MAX_OCTAVES - _displayedOctaves + 1
    var isMin = _startOctave == 0
    $("#raiseOctave").prop('disabled', isMax)
    $("#lowerOctave").prop('disabled', isMin)
}

function updateOctaveLabels(){
    $('.whiteKey>p').each(function(i, domLabel) {
        var label = $(domLabel)
        var currentOctave = _startOctave + 1 + i
        label.text("C" + currentOctave)
    })
}

function limitToRange(number, min, max) {
    return Math.min(Math.max(min, number), max)
}
