import { shuffleString, createElement } from "../../utils.js"
import { scrambleInputIsValid } from "../../validations.js"

export function renderScrambleCanvas() {
    resetCanvas()

    $(".canvas .input").append(createElement("textarea", {
        spellcheck: "false",
        class: "text-input"
    }))

    const button = createElement("button", { class: "scramble" })
    button.innerHTML = "Scramble"
    button.addEventListener("click", scrambleHandler)
    $(".canvas .input").append(button)
}

function resetCanvas(options = { initial: false }) {
    if (options.initial) {
        $(".canvas .input")[0].innerHTML = "<p>Pick a widget below</p>"
        $(".canvas .output")[0].innerHTML = "<p class='text-output'>---</p>"
    }
    else {
        $(".canvas .input")[0].innerHTML = ""
        $(".canvas .output")[0].innerHTML = "<p class='text-output'>---</p>"
    }
}

function scrambleHandler() {
    const input = $(".canvas .text-input").val()
    const output = scrambleInputIsValid(input)
        ? shuffleString(input)
        : input

    $(".canvas p.text-output").text(output)
}