import { renderScrambleCanvas } from "./components/scrambleCanvas/index.js"
import { showDebugScreen, DebugScreen } from "./debug.js"
import { gradualYScroll, resetScroll } from "./animations.js"

function main() {
  $(document).ready(() => {
    $("button.scrambler.widget").click(() => {
      renderScrambleCanvas()
    })
    
    $("button.widget:not(.scrambler)").click(() => {
      alert("Coming soon")
    })

    $(".widget").mouseover(widgetMouseoverHandler);
    $(".widget").mouseout(widgetMouseoutHandler);

    // Debug Related
    $("body").append(DebugScreen())
    $("button#debug-btn").click(showDebugScreen)
  });
}

function widgetMouseoverHandler(e) {
  const widgetBody = $(e.target).children(".widget-body")
  gradualYScroll(widgetBody, 40)
}

function widgetMouseoutHandler(e) {
  const widgetBody = $(e.target).children(".widget-body")
  resetScroll(widgetBody)
}

main();
