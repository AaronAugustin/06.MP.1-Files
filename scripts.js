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

    return setInterval(() =>{
        ctx.drawImage(video, 0, 0, width, height);

        var pixels = ctx.getImageData(0, 0, width, height);
        pixels = rgbSplit(pixels);

        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    var data = canvas.toDataURL('');
    var link = document.createElement('');

    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt='handsome man />`;

    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200; // <-- red
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // <-- green
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // <-- blue;
    }

    return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // RED
      pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
      pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }

    return pixels;
}
   
