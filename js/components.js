function Canvas(props) {
    const canvas = document.createElement("div")

    canvas.classList.add("canvas")

    const appName = document.createElement("p")
    const appNameText = document.createTextNode(props?.appName || "")

    appName.classList.add("name")
    appName.appendChild(appNameText)

    canvas.appendChild(appName)

    return canvas
}

function TextCanvas(props){
    const canvas = Canvas(props)

    // Input element
    const input = document.createElement("input")
    input.setAttribute("class", "text-input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "Input your text here")

    canvas.appendChild(input)

    // Button Trigger
    const button = document.createElement("button")
    button.classList.add(props?.btnAttr?.class || "")

    button.addEventListener("click", props?.btnAttr.onclick || null)
    button.innerHTML = props?.btnAttr?.text || ""

    canvas.appendChild(button)

    // Output element
    const outputP = document.createElement("p")
    outputP.classList.add("output")
    const outputPText = document.createTextNode("Output:")

    outputP.appendChild(outputPText)

    const outputSpan = document.createElement("span")
    outputSpan.classList.add("output")

    outputP.appendChild(outputSpan)

    canvas.appendChild(outputP)

    return canvas
}