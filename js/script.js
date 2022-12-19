import {
  renderScrambleCanvas,
  resetCanvas
} from "./components/scrambleCanvas/index.js"
import {
  modifyCSSSelector,
  getGlobalWidgetWidth,
  getAllSmallWidgetSections
} from "./utils.js";
import {
  gradualYScroll,
  resetScroll
} from "./animations.js"
import {
  showDebugScreen,
  DebugScreen
} from "./debug.js"

function main() {
  $(document).ready(() => {
    $("button.scrambler.widget").click(() => {
      renderScrambleCanvas()
    })

    $("button.widget:not(.scrambler)").click(() => {
      resetCanvas({ initial: true })
      $(".canvas").attr("class", "canvas")
      alert("Coming soon")
    })

    $(".widget").mouseover(widgetMouseoverHandler);
    $(".widget").mouseout(widgetMouseoutHandler);


    windowResizeHandler()
    getAllSmallWidgetSections().forEach(section => {
      $(section).addClass("small-section")
    })
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
    modifyCSSSelector("styles.css", "div.section-widgets.small-section .widget", {
      "flex-basis": getGlobalWidgetWidth() + "px"
    })
  })
}

main();
