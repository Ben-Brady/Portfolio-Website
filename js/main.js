Email = "benbradybusiness@gmail.com";

requestAnimationFrame(UpdateAge);

function UpdateAge(timestamp) {
    var Years = Date.now() / 31536000000 - 34.5912616929044
    Numbers = Years.toString() + "000000000"
    document.getElementById("Age").innerHTML = Numbers.slice(0, 12)
    requestAnimationFrame(UpdateAge)
}

function Popup(Text) {
    var Popup = document.getElementById("Popup")
    var PopupText = document.getElementById("PopupText")
    PopupText.innerHTML = Text
    Popup.style.opacity = "1"

    setTimeout(function () {
        Popup.style.opacity = "0"
    }, 3000)
}

async function PopupCopy() {
    var Popup = document.getElementById("Popup")
    var PopupText = document.getElementById("PopupText")

    if (navigator.clipboard) {
        navigator.clipboard.writeText(PopupText.innerHTML)
    } else {
        CopyToClipboard(PopupText.innerHTML)
    }
    PopupText.innerHTML = "Copied to Clipboard!"
    Popup.style.opacity = "0"
}

/* ------- Other People's Code ------ */

function CopyToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        CopyToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(
        function () {
            console.log("Async: Copying to clipboard was successful!");
        },
        function (err) {
            console.error("Async: Could not copy text: ", err);
        },
    );
}


copyBobBtn.addEventListener("click", function (event) {
    copyTextToClipboard("Bob");
});

copyJaneBtn.addEventListener("click", function (event) {
    copyTextToClipboard("Jane");
});