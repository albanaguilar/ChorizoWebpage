//LOADER
var loader;
function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.05);
        }, 100);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});
//END LOADER

//NAVBAR FOR MOBILE
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

//END NAVBAR


//SLIDER
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
});
// END SLIDER

//SCROLL VIDEO PLAY
var chav = document.getElementById('video-chav');

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#video-chav", duration: 200})
        .addTo(controller)
        .addIndicators() // add indicators (requires plugin)

        .on("enter", function () {
          chav.play();
        })
        .on("leave", function () {
          chav.pause();
        })
//END SCROLL VIDEO PLAY














