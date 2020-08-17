//video
var videoElement = document.getElementById("video");
//comment
var videoComment = document.getElementById("comment");

//動画を再生する
function playVideo(){
  videoElement.play();
  videoComment.innerHTML = "playing the video"; 
}

//動画を一時停止する
function pauseVideo(){
  videoElement.pause();
  videoComment.innerHTML = "pausing the video";
}

//動画再生が終了した時の文言を表示する
function displayEndComment(){
  videoComment.innerHTML = "finish the video";
} 