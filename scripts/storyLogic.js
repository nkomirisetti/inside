var storyJSON = [
    {
        "text": "C: YOUR TASK: DON'T LET HER FIND OUT...\nC: Use the map to guide her to all the blue points.\nC: *phone ringing*\nC: *click*\nC: BEGINNING VOICE TRANSCRIPTION... \nG: Hello?\nAI: Hello.\nG: Who is this?\nAI: I am here to help you.  How are you feeling?\nG: Sleepy... what time is it?  Where am I?\nAI: Time always moves forward. Let's move on. I need your help with some tasks.\nG: Why can't you just do them?\nAI: I need your help. I will relay some commands to you, which you will follow. Understand?\nG: Yeah, I guess. But where's everyone else?\nAI: They are nearby, but busy. Please follow my instructions.\nG: Why is everything made of metal? This room is so ugly!\n[[Leave the room]]\n[[Stay in the room]]",
        "links": [
            {
                "name": "Leave the room",
                "link": "Leave the room",
                "pid": "2"
            },
            {
                "name": "Stay in the room",
                "link": "Stay in the room",
                "pid": "3"
            }
        ],
        "name": "Beginning",
        "pid": "1",
        "position": {
            "x": "600",
            "y": "201"
        }
    },
    {
        "text": "#GOOD\nG: This place looks so big... do I live here?\nAI: For now, yes.\nG: Where am I going?\nAI: To take care of some things.\nG: I wanna look around first, there's so much here! I think I see a pool table, and a fridge? I'm so thirsty, let me just grab something to drink first.  \n[[Go to generator]]\n[[Go to fridge]]",
        "links": [
            {
                "name": "Go to generator",
                "link": "Go to generator",
                "pid": "4"
            },
            {
                "name": "Go to fridge",
                "link": "Go to fridge",
                "pid": "5"
            }
        ],
        "name": "Leave the room",
        "pid": "2",
        "position": {
            "x": "349",
            "y": "281"
        },
        "tags": [
            "good"
        ]
    },
    {
        "text": "#BAD\nG: This whole place looks like steel or something, am I in a hospital?\nAI: Something like that.\nG: This long table... it looks like there's rust stains on it. And why are dentistry tools here?\nAI: ...\nG: This window shows nothing, is it covered up from outside?  It's completely black.  \nAI: The window is not covered.\n[[Go to generator]]\n[[Go to fridge]]",
        "links": [
            {
                "name": "Go to generator",
                "link": "Go to generator",
                "pid": "4"
            },
            {
                "name": "Go to fridge",
                "link": "Go to fridge",
                "pid": "5"
            }
        ],
        "name": "Stay in the room",
        "pid": "3",
        "position": {
            "x": "923",
            "y": "295"
        },
        "tags": [
            "bad"
        ]
    },
    {
        "text": "#GOOD\nG: This machine looks so strange... what am I supposed to do with it?  I don't want to break anything.\nAI: Press the red button labelled 'POWER'.\nC: *whizzing noise*\nG: Okay, now what? \n[[Go to steel wall]]\n[[Go to alcove]]",
        "links": [
            {
                "name": "Go to steel wall",
                "link": "Go to steel wall",
                "pid": "6"
            },
            {
                "name": "Go to alcove",
                "link": "Go to alcove",
                "pid": "7"
            }
        ],
        "name": "Go to generator",
        "pid": "4",
        "position": {
            "x": "343",
            "y": "433"
        },
        "tags": [
            "good"
        ]
    },
    {
        "text": "#BAD\nG: Is there any normal water in this fridge? All I see is those little science tubes filled with red water.\nAI: That isn't water.\nG: This desk is so messy, there's so much junk and paper here. Whoever runs this hospital needs some help.\nG: ...\nG: A worldwide epidemic? This article here says that, there's... 75% of the world's population wiped out? T-this is fake, like The Onion or something, right?\nAI: No, I am afraid not.\nG: This other article, that's my high school!\nG: ...\nG: There's so many missing students, and I'm on the list... \n[[Go to steel wall]] \n[[Go to alcove]]",
        "links": [
            {
                "name": "Go to steel wall",
                "link": "Go to steel wall",
                "pid": "6"
            },
            {
                "name": "Go to alcove",
                "link": "Go to alcove",
                "pid": "7"
            }
        ],
        "name": "Go to fridge",
        "pid": "5",
        "position": {
            "x": "903",
            "y": "450"
        },
        "tags": [
            "bad"
        ]
    },
    {
        "text": "#GOOD\nG: There's a giant metal door here.  It's not opening.\nAI: There should be a small blue button to your left.  Hold it for three seconds.\nC: *buzzing noise and door opening*\nG: Alright, they're not gonna close on me, right?\nAI: I promise they will not.\nG: There's so many doors here... I don't recognize any names.  Who are these people?\nAI: Do not worry about it.\nG: Thorm, Nickeel, Safiy-\nAI: We have other things to do right now.\n[[Check doors]]\n[[Go through hallway]]",
        "links": [
            {
                "name": "Check doors",
                "link": "Check doors",
                "pid": "8"
            },
            {
                "name": "Go through hallway",
                "link": "Go through hallway",
                "pid": "9"
            }
        ],
        "name": "Go to steel wall",
        "pid": "6",
        "position": {
            "x": "339",
            "y": "594"
        },
        "tags": [
            "good"
        ]
    },
    {
        "text": "#BAD\nG: This looks like some sort of office. It's so dusty, does no one use this?\nAI: It has been a while.\nG: This mirror is so grimy!\nC: *wiping noise*\nG: Wow, I look awful... what happened to my hair? And what are these weird marks on my arms? \nAI: You appear to be in perfect health. Aesthetics are not important.\nG: There's some files here? I wonder if... oh my God, they have my name in here too. I guess I really am a patient here.\nG: ...\nG: My... parents? Where are they? It says 'EXPIRED'. \nAI: Expired is a polite term for dead.\nG: That's not possible! \n[[Check doors]] \n[[Go through hallway]] ",
        "links": [
            {
                "name": "Check doors",
                "link": "Check doors",
                "pid": "8"
            },
            {
                "name": "Go through hallway",
                "link": "Go through hallway",
                "pid": "9"
            }
        ],
        "name": "Go to alcove",
        "pid": "7",
        "position": {
            "x": "907",
            "y": "601"
        },
        "tags": [
            "bad"
        ]
    },
    {
        "text": "#BAD\nG: You tell me not to worry about it but then tell me to check the doors? \nAI: I suppose.\nG: Cool, cool, which should I check first?\nAI: I will leave it up to you.\nC: *door opening*\nG: It's some kind of bedroom, but it's sooo much nicer than mine! There's no steel anywhere! No fair. \nG: It smells disgusting though. Like, actually repulsive. Let's try a different one.\nC: *door opening*\nG: ...\nG: .....\nG: AAAAAAAAAAAAAAAAAAA!!!!!\nAI: They have been dead for quite some time now. There is nothing to fear.\nG: HOW DOES THAT MAKE THINGS BETTER! Am I gonna be killed too? This man has a KNIFE IN HIS CHEST! Is there even ANYONE alive on this ship? \nG: ...\nG: I'm gonna be sick.\n[[Turn towards oxygen]] \n[[Turn towards exit]] ",
        "links": [
            {
                "name": "Turn towards oxygen",
                "link": "Turn towards oxygen",
                "pid": "10"
            },
            {
                "name": "Turn towards exit",
                "link": "Turn towards exit",
                "pid": "11"
            }
        ],
        "name": "Check doors",
        "pid": "8",
        "position": {
            "x": "904",
            "y": "757"
        },
        "tags": [
            "bad"
        ]
    },
    {
        "text": "#GOOD\nAI: See the giant lever at the end of the hallway?\nG: There's like fifty of them, which do I pull? All of them?\nAI: There should be only seven levers. Pull the one labelled 'BARRICADES'.\nC: *loud whirring followed by a loud thud*\n[[Turn towards oxygen]]\n[[Turn towards exit]]",
        "links": [
            {
                "name": "Turn towards oxygen",
                "link": "Turn towards oxygen",
                "pid": "10"
            },
            {
                "name": "Turn towards exit",
                "link": "Turn towards exit",
                "pid": "11"
            }
        ],
        "name": "Go through hallway",
        "pid": "9",
        "position": {
            "x": "337",
            "y": "756"
        },
        "tags": [
            "good"
        ]
    },
    {
        "text": "#GOOD\nG: I don't see anything to do here.\nAI: There there's a panel in the far corner, with a small latch on it. Feel along the wall and you should find it. \nG: I can't find... oh. There's 'ELECTROLYSIS' containers inside? What do I do with these? \nAI: There should be one attached to the wall already. Take it out and replace it with a new container.\nG: Alright. Oh gee, this is much heavier than I expected.\nG: Okay, done!\n[[Go back to your room]]",
        "links": [
            {
                "name": "Go back to your room",
                "link": "Go back to your room",
                "pid": "12"
            }
        ],
        "name": "Turn towards oxygen",
        "pid": "10",
        "position": {
            "x": "334",
            "y": "896"
        },
        "tags": [
            "good"
        ]
    },
    {
        "text": "#BAD\nG: There's a huge 'EXIT' sign here? I'm gonna check it out.\nAI: I would advise against that.\nG: An 'EMERGENCY SUBMARINE'? Are we near the ocean or something? \nAI: We are on the ocean floor.\nG: What is this place... \n[[Go back to your room]] ",
        "links": [
            {
                "name": "Go back to your room",
                "link": "Go back to your room",
                "pid": "12"
            }
        ],
        "name": "Turn towards exit",
        "pid": "11",
        "position": {
            "x": "904",
            "y": "889"
        },
        "tags": [
            "bad"
        ]
    },
    {
        "text": "AI: Let us head back to your room now. It is time for you to go back to sleep.\n[[good ending]]\n[[bad ending]]",
        "links": [
            {
                "name": "good ending",
                "link": "good ending",
                "pid": "13"
            },
            {
                "name": "bad ending",
                "link": "bad ending",
                "pid": "14"
            }
        ],
        "name": "Go back to your room",
        "pid": "12",
        "position": {
            "x": "620",
            "y": "1008"
        }
    },
    {
        "text": "G: Okay.\nG: What is this place supposed to be? I don't think it's a hospital.\nAI: Do not worry about it. Thank you for helping me today. You have been of great assistance, both to yourself and the future of humanity.\nG: Oh yeah, anytime robot dude. This bed is so weird, I didn't realize it could close before. It's like a glass cage or something. \nAI: Be sure to close it tightly.\nEND",
        "name": "good ending",
        "pid": "13",
        "position": {
            "x": "525",
            "y": "1150"
        }
    },
    {
        "text": "AI: I do not seem to be able to help you with station maintenance.\nG: Station? So this isn't a hospital? \nG: And where is everyone else? I haven't seen a single... living person in this entire place.\nAI: Do not worry about it. There is nothing that can be done for your situation, so let us just put you back to sleep.\nG: Like, sedate me? I don't know what the hell is happening here, but I want out! I just want to go home!\nAI: There is no home to return to. This is your home now.\nG: I'm getting out of here.\nAI: No please, listen, there's a-\nC: *click*\nC: *phone line dead noise*\nEND",
        "name": "bad ending",
        "pid": "14",
        "position": {
            "x": "699",
            "y": "1150"
        }
    }
];

var chapterIndex = 0;
var lineIndex = 0;
var goodScore = 0;
var badScore = 0;

var loadStory = function () {
    console.log("Story loaded embedded");
}

var getNextMessage = function () {
    var chapter = storyJSON[chapterIndex].text.split("\n");
    var text = chapter[lineIndex];
    lineIndex++;
    return text;
}

var isEnd = function (text) {
    if (text.match("END")) {
        if (goodScore > badScore) {
            fadeToWhite();
        } else {
            fadeToDark();
        }
    }
}

var isGirl = function (text) {
    if (text.match("^G: ")) {
        return text.slice(3,);
    }
}

var isAI = function (text) {
    if (text.match("^AI: ")) {
        return text.slice(4,);
    }
}

var isBranch = function (text) {
    if (text.startsWith("[[", 0)) {
        return text.slice(2, text.length - 2);
    }
}

var isConsole = function (text) {
    if (text.match("^C: ")) {
        return text.slice(3,);
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

var fadeToDark = function () {
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