'use strict';

const logo = document.querySelector('.video__img');

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var videoScriptTag = document.getElementsByTagName('script')[0];
videoScriptTag.parentNode.insertBefore(tag, videoScriptTag);

var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'H9vNq1-FGgc',
    events: {
      'onStateChange': onPlayerStateChange,
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    logo.style.display = "none";
  } else {
    logo.style.display = "block";
  }
}

function stopVideo() {
  player.stopVideo();
}

logo.addEventListener("click", function(){
  logo.style.display = "none";
  player.playVideo();
});