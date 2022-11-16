function main() {
  $(document).ready(() => {
    document.getElementById("text-manipulators").appendChild(Canvas({ appName: "Scrambler" }))
    $("button.scramble").click(() => {
      const input = $(".canvas .text-input").val()

      // Default output is the input
      $("span.output").html(input)

      if (input.length === 0) {
        console.log("Empty");
        return
      }
      if (isOneCharString(input)) {
        console.log("Is one char");
        return
      }

      const output = shuffleString(input)

      $("span.output").html(output)
    });
  });
}

main();
