function main() {
  $(document).ready(() => {

    const textCanvas = TextCanvas({ 
      appName: "Scrambler", 
      btnAttr: { 
        class: "scramble",
        onclick: scrambleHandler,
        text: "Scramble"
      } 
    })

    $("button.scrambler.widget").click(() => {
      $("#text-manipulators .canvas").toggle()
    })
    $(".section-title").after(textCanvas)
    // document.getElementById("text-manipulators").prepend(textCanvas)
  });
}

function scrambleHandler() {
  const input = $(".canvas .text-input").val()

  // Default output is the input
  $("span.output").text(input)

  if (input.length === 0) {
    return
  }
  if (isOneCharString(input)) {
    return
  }

  const output = shuffleString(input)

  $("span.output").text(output)
}

main();
