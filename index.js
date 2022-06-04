'use strict'

window.onload = () => {
    console.log('onload');
    var AudioContext = window.AudioContext || window.webkitAudioContext,
    ctx = new AudioContext();

    var oscillator = ctx.createOscillator();
    oscillator.connect(ctx.destination);
    document.getElementById('start').addEventListener('click', () => {
        oscillator.start();
    })
    document.getElementById('stop').addEventListener('click', () => {
        oscillator.stop();
    })
};