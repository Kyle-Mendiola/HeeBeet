// Shuffle array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleString(a) {
  let scrambled = shuffle(Array.from(a)).join("")
  while (scrambled === a) {
    scrambled = shuffle(Array.from(a)).join("")
  }
  return scrambled
}

function arrayEqual(a, b) {
  return a.every((val, idx) => val === b[idx])
}

function isOneCharString(a) {
  let i = a.length
  while (i--) {
    if (a.charAt(0) !== a.charAt(i)) {
      return false
    }
  }
  return true
}

function createElement(element, attrs) {
  const elem = document.createElement(element)

  for (const key in attrs) {
    if(attrs.hasOwnProperty(key)) {
      elem.setAttribute(key, attrs[key])
    }
  }

  return elem
}

function getAllSmallWidgetSections(){
  const sections = document.querySelectorAll(".section-widgets")

  const smallSections = []

  sections.forEach(section => {
    if(section.childElementCount < 4){
      smallSections.push(section)
    }
  })

  return smallSections
}

const getCompleteSection = () => {
  const sections = document.querySelectorAll(".section-widgets")

  let completeSection

  sections.forEach(sec => {
    if(sec.childElementCount >= 4){
      completeSection = sec
    }
  })

  return completeSection
}

const getGlobalWidgetWidth = () => {
  return $(getCompleteSection().firstElementChild).width()
}

export {
  isOneCharString,
  createElement,
  shuffleString,
  getAllSmallWidgetSections,
  getGlobalWidgetWidth
}