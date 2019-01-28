var storyJSON;
var chapterIndex = 0;
var lineIndex = 0;
var goodScore = 0;
var badScore = 0;

var loadStory = function () {
    $.get("https://api.myjson.com/bins/1di0l4", function (data, textStatus, jqXHR) {
        storyJSON = data.passages;
        console.log(storyJSON);
    });
}

var getNextMessage = function () {
    var chapter = storyJSON[chapterIndex].text.split("\n");
    var text = chapter[lineIndex];
    lineIndex++;
    return text;
}

var isEnd = function (text) {
    if (text.match("END")){
        if (goodScore> badScore){
            fadeToWhite();
        } else {
            fadeToDark();
        }
    }
}

var isGirl = function (text) {
    if (text.match("^G: ")) {
        return text.slice(3, );
    }
}

var isAI = function (text) {
    if (text.match("^AI: ")) {
        return text.slice(4, );
    }
}

var isBranch = function (text) {
    if (text.startsWith("[[", 0)) {
        return text.slice(2, text.length - 2);
    }
}

var isConsole = function (text) {
    if (text.match("^C: ")) {
        return text.slice(3, );
    }
}

var isGoodOrBad = function (text) {
    if (text.startsWith("#")) {
        if (text.startsWith("#G")) {
            goodScore++;
        } else {
            badScore++;
        }
        lineIndex++;
    }

}

var fadeToDark = function() {
    $("#fullScreen").fadeOut(0);
    $("#fullScreen").append("<h1 class='white'>END</h1>");
    $("#fullScreen").append("<h2 class='white'>A game by Sophia Shaikh, Nikhil Komirisetti, and Tom Nguyen.</h2>")
    $("#fullScreen").css("background", "black");
    $("#fullScreen").fadeIn(1000);


}

var fadeToWhite = function () {
    $("#fullScreen").fadeOut(0);
    $("#fullScreen").append("<h1 class='black'>END</h1>");
    $("#fullScreen").append("<h2 class='black'>A game by Sophia Shaikh, Nikhil Komirisetti, and Tom Nguyen.</h2>")
    $("#fullScreen").css("background", "white");
    $("#fullScreen").fadeIn(1000);   
}