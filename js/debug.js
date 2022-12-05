function DebugScreen() {
  const debugScreen = createElement("div", { id: "debug" })

  debugScreen.appendChild(document.createTextNode("Width: "))
  debugScreen.appendChild(createElement("p", { class: "width" }))
  debugScreen.appendChild(document.createTextNode("Height: "))
  debugScreen.appendChild(createElement("p", { class: "height" }))
  debugScreen.appendChild(document.createTextNode("Width: "))
  debugScreen.appendChild(createElement("p", { class: "font" }))

  const closeBtn = document.createElement("button")
  closeBtn.addEventListener("click", showDebugScreen)
  closeBtn.appendChild(document.createTextNode("Close"))

  debugScreen.appendChild(closeBtn)

  return debugScreen

}

function showDebugScreen() {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  $("#debug").toggle()
  $("#debug p.width").text(width);
  $("#debug p.height").text(height);
  $("#debug p.font").text($("p.title").detectFont());
};