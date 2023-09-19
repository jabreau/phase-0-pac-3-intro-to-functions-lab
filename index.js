function shout(string) {
    return string.toUpperCase();
}
shout("hello");

function whisper(string) {
    return string.toLowerCase();
}
whisper("hello");

function logShout(string) {
    console.log(string.toUpperCase());
}
logShout("hello");

function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper("hello");

function sayHiToHeadphonedRoommate(string) {
    switch (true) {
        case string === string.toLowerCase():
            return `I can\'t hear you!`;
            break;
        case string === string.toUpperCase():
            return `YES INDEED!`;
            break;
        case string === `Let\'s have dinner together!`:
            return 'I would love to!';
            break;
    }
}
sayHiToHeadphonedRoommate("hello");
