function Canvas(props) {
    const canvas = document.createElement("div")

    canvas.classList.add("canvas")

    console.log(props.appName);

    const appName = document.createElement("p")
    const appNameText = document.createTextNode(props?.appName || "")

    appName.classList.add("name")
    appName.appendChild(appNameText)

    canvas.appendChild(appName)

    return canvas
}