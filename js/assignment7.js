/*
 *Date: 3/23/2020
 *Author: Anthony Machniak
 *Class: CITW 165
 *Exercise: 7
 *Note: removed srcElement, attachEvent, event.returnValue, and window.event calls as assignment will not be supporting IE 8+. It's 2020, IE11 is almost EOL, we can let IE go.
 */

$('#noteInput').on('input', writeLabel);
$('#buttons').on('click', recorderControls);

function writeLabel(e) {
    $('#noteName').text(e.target.value);
}

function recorderControls(e) {
    e.preventDefault();

    target = e.target;
    switch (target.getAttribute('data-state')) {
        case 'record':
            target.setAttribute('data-state', 'stop');
            break;
        case 'stop':
            target.setAttribute('data-state', 'record');
            break;
    }
}