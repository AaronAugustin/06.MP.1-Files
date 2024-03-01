var video = document.querySelector('.player');
var audio = document.querySelector('.snap');
var strip = document.querySelector('.strip');

var canvas = document.querySelector('.photo');
var ctx = canvas.getContext('2d');

function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then((stream) => {
        var videoTracks = stream.getVideoTracks();
        console.log(localMediaStream); // <-- accesses the user so we can use it on the page

        video.srcObject = localMediaStream;
        video.play();
    })

    .catch(err => {
        console.log;('something went wrong.', err);
    });
}

function paintToCanvas() {
    var width = video.videoWidth;
    var height = video.height;

    canvas.width = width;
    canvas.height = height;
}

function takePhoto() {
    // add contents here :)
}
