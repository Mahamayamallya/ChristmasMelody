document.addEventListener("DOMContentLoaded", function () {
  var numOfSongs = document.querySelectorAll(".playlist i").length;
  var currentAudio = null;

  for (var i = 0; i < numOfSongs; i++) {
    (function (index) {
      var icon = document.querySelectorAll(".playlist i")[index];
      var audio = new Audio("Sounds/song" + (index + 1) + ".mp3");

      icon.addEventListener("click", function () {
        var classes = this.classList;

        if (currentAudio === audio && !audio.paused) {
          audio.pause();
          classes.remove("bi-pause-circle-fill");
          classes.add("bi-play-circle-fill");
          currentAudio = null;
        } else {
          if (currentAudio) {
            currentAudio.pause();
            var currentIcon = document.querySelector(".bi-pause-circle-fill");
            currentIcon.classList.remove("bi-pause-circle-fill");
            currentIcon.classList.add("bi-play-circle-fill");
          }
          audio.play();
          classes.remove("bi-play-circle-fill");
          classes.add("bi-pause-circle-fill");
          currentAudio = audio;
        }
      });
    })(i);
  }
});
