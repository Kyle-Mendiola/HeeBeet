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

    $(".widget").mouseover(function () {
      const maxscroll = $(this).children(".widget-body").height();
      const speed = maxscroll * 50;
      $(this).children(".widget-body").animate({
        scrollTop: maxscroll,
      }, speed, "linear");
    });

    $(".widget").mouseout(function () {
      $(this).children(".widget-body").stop(true);
      $(this).children(".widget-body").scrollTop(0)
    });

    $("#text-manipulators .section-title").after(textCanvas)

    // Debug Related
    document.body.appendChild(DebugScreen())
    $("p.title").dblclick(showDebugScreen)
  });
}

function scrambleHandler() {
  const input = $(".canvas .text-input").val()

  console.log("hello");

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
