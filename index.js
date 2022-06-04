'use strict'

window.onload = () => {
    console.log('onload');
    var AudioContext = window.AudioContext || window.webkitAudioContext,
    ctx = new AudioContext();

    const audioElement = document.querySelector('audio');
    const track = ctx.createMediaElementSource(audioElement);
    track.connect(ctx.destination);
    // var oscillator = ctx.createOscillator();
    // oscillator.connect(ctx.destination);
    // document.getElementById('start').addEventListener('click', () => {
    //     oscillator.start();
    // })
    // document.getElementById('stop').addEventListener('click', () => {
    //     oscillator.stop();
    // })

    // select our play button
    const playButton = document.querySelector('button');

    playButton.addEventListener('click', function() {

        // check if context is in suspended state (autoplay policy)
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        // play or pause track depending on state
        if (this.dataset.playing === 'false') {
            audioElement.play();
            this.dataset.playing = 'true';
        } else if (this.dataset.playing === 'true') {
            audioElement.pause();
            this.dataset.playing = 'false';
        }

    }, false);
    audioElement.addEventListener('ended', () => {
        playButton.dataset.playing = 'false';
    }, false);
};