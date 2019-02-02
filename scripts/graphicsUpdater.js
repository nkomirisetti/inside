function moveTo(target) {
    $("#girl").css("top", target.css("top"));
    $("#girl").css("left", target.css("left"))
}

function goTo(x, y) {
    $("#girl").css("top", y);
    $("#girl").css("left", x)
}

var updateChapterGraphics = function () {
    if (chapterIndex === 1) {
        goTo(520, 367);
    }
    if (chapterIndex === 2) {
        moveTo($("#bedroom"));
    }
    if (chapterIndex === 3) {
        moveTo($("#taskA"));
    }
    if (chapterIndex === 4) {
        moveTo($("#fridge"));
    }
    if (chapterIndex === 5) {
        moveTo($("#steelWall"));
    }
    if (chapterIndex === 6) {
        moveTo($("#alcove"));
    }
    if (chapterIndex === 7) {
        moveTo($("#doors"));
    }
    if (chapterIndex === 8) {
        moveTo($("#taskB"))
    }
    if (chapterIndex === 9) {
        moveTo($("#taskC"));
    }
    if (chapterIndex === 10) {
        moveTo($("#exit"));
    }
    if (chapterIndex === 11) {
        moveTo($("#bedroom"));
    }
}