var createMessage = function (speaker, message) {
    var messageLabel;
    if (speaker === "AI") {
        messageLabel = $('<div class="message CPUmsg"></div>');
    } else if (speaker === "G") {
        messageLabel = $('<div class="message USERmsg"></div>');
    } else {
        messageLabel = $('<div class="message CONSOLEmsg"></div>');
    }

    messageLabel.append(message);
    return messageLabel;
}