function audioAnimate() {
    var x = Math.round(Math.random() * 22);
    var y = "[";
    for (i = 0; i < x; i++) {
        y = y + "|";
    }
    for (i = 0; i < (22 - x); i++) {
        y = y + "-";
    }
    y = y + "]";
    y = "TRANSCRIPTION: " + y
    $("#audioGraphic").text(y);
}

setInterval(audioAnimate, 50);