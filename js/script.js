import { renderScrambleCanvas } from "./components.js"
import { showDebugScreen, DebugScreen } from "./debug.js"
import { gradualYScroll, resetScroll } from "./animations.js"
import { scrambleInputIsValid } from "./validations.js"

function main() {
  $(document).ready(() => {
    $("button.widget").click(() => {
      renderScrambleCanvas()
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
