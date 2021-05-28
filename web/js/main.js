"use strict";

let sections = "";
for(var i = 0; i < 4; i++){
  sections = sections+"<section>";
  for(var k = 1; k <= 9; k++){
    if(i%2==0 && k==3){
      sections = sections+`<video src="https://cdn.videvo.net/videvo_files/video/free/2020-05/small_watermarked/3d_ocean_1590675653_preview.webm" playsinline autoplay muted loop></video>`;
    }else if(i%2!=0 && k==1){
      sections = sections+`<video src="https://cdn.videvo.net/videvo_files/video/free/2020-09/small_watermarked/200710_05_expressions%20portraits_HD_029_preview.webm" playsinline autoplay muted loop></video>`;
    }else{
      sections = sections+`<img src="https://source.unsplash.com/random/400x400?sig=${k}" alt="">`;
    }
  }
  sections = sections+"</section>";
}
document.querySelector("body > main").innerHTML = sections;
