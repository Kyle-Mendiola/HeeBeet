import { renderScrambleCanvas } from "./components/scrambleCanvas/index.js"
import { showDebugScreen, DebugScreen } from "./debug.js"
import { gradualYScroll, resetScroll } from "./animations.js"
import { getGlobalWidgetWidth, getAllSmallWidgetSections } from "./utils.js";

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

    windowResizeHandler()
    $(window).resize(windowResizeHandler)

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

function windowResizeHandler() {
  getAllSmallWidgetSections().forEach(section => {
    $(section).addClass("small-section")
    const stylesCss = document.styleSheets[0]
    const rules = stylesCss.cssRules || stylesCss.rules

    rules[13].style["flex-basis"] = getGlobalWidgetWidth() + "px"
  })
}

main();
