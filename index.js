"use strict";

let videobutton = document.querySelector("#videobutton");

let video = document.querySelector("video");

let videoOverlay = document.querySelector(".video_overlay");

videobutton.addEventListener("click", playVideo);

function playVideo() {
  videoOverlay.classList.add("hide");
  video.play();
}
