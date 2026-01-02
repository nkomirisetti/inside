var chatContainer;
var IS_DEBUG = false;

var apiLoad;
var animation;


$(document).ready(() => {
    $("#startButton").click(function () {
        $("#startOverlay").fadeOut(500);

        // Start background music
        var bgMusic = document.querySelector("audio[src='music/background_music_simple.mp3']");
        if (bgMusic) {
            bgMusic.play().catch(e => console.log("Audio play failed:", e));
        }

        chatContainer = $("#chatContainer");

        if (IS_DEBUG) {
            apiLoad = 5000;
            animation = 200;
        } else {
            apiLoad = 2000;
            animation = 750;
        }

        $("#buttonContainer").slideUp(0);
        setTimeout(function () {
            populateMessage(true)
        }, apiLoad);
        loadStory();
    });
})

var populateMessage = function () {
    updateChapterGraphics();
    var message = getNextMessage();
    playMessageSound(message);
    var messageBox;
    if (isAI(message)) {
        message = isAI(message);
        messageBox = createMessage("AI", message);
    } else if (isGirl(message)) {
        message = isGirl(message);
        messageBox = createMessage("G", message);
    } else if (isBranch(message) && chapterIndex < 12) {
        beginBranch();
        return;
    } else if (isEnd(message)) {
        return;
    } else {
        message = isConsole(message);
        messageBox = createMessage("Console", message);
    }
    chatContainer.append(messageBox);
    messageBox.fadeOut(0);

    chatContainer.animate({
        scrollTop: chatContainer.prop("scrollHeight")
    }, 400);

    messageBox.fadeIn(animation, function () {
        var timeout;
        if (IS_DEBUG) {
            timeout = 200;
        } else {
            timeout = 1500 + message.length * 50
        }

        setTimeout(function () {
            populateMessage()
        }, timeout);
        $("#chatContainer").scrollTop(9999);
    });

};

var beginBranch = function () {

    if (storyJSON[chapterIndex].links.length === 1) {
        finalBranch();
        return;
    }

    var optionA = storyJSON[chapterIndex].links[0];
    var optionB = storyJSON[chapterIndex].links[1];
    if (optionA.name === "good ending") {
        ending()
        return;
    }

    var buttonOptionA = $("#optionA");
    var buttonOptionB = $("#optionB");
    var buttonContainer = $("#buttonContainer");
    buttonContainer.slideDown(1000);

    buttonOptionA.html(optionA.name);
    buttonOptionB.html(optionB.name);

    buttonOptionA.off();
    buttonOptionB.off();


    buttonOptionA.click({
        param1: optionA.pid
    }, branchSelected);
    buttonOptionB.click({
        param1: optionB.pid
    }, branchSelected);
};

function branchSelected(event) {
    var PID = event.data.param1;
    var i;
    for (i = 0; i < storyJSON.length; i++) {
        if (storyJSON[i].pid === PID) {
            chapterIndex = i;
            lineIndex = 0;
        }
    }

    var chapter = storyJSON[chapterIndex].text.split("\n");
    var text = chapter[0];
    isGoodOrBad(text);

    populateMessage();
    if (chapterIndex < 12) {
        $("#buttonContainer").slideUp(1000);
    }
};

function ending() {
    if (goodScore > badScore) {
        lineIndex = 0;
        chapterIndex = 12;
    } else {
        lineIndex = 0;
        chapterIndex = 13;
    }
    populateMessage();
}

function finalBranch() {
    chapterIndex = 11;
    lineIndex = 0;
    populateMessage();
}
