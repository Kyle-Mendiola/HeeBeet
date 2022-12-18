// Shuffle array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function shuffleString(a) {
  let scrambled = shuffle(Array.from(a)).join("")
  while (scrambled === a) {
    scrambled = shuffle(Array.from(a)).join("")
  }
  return scrambled
}

export function isOneCharString(a) {
  let i = a.length
  while (i--) {
    if (a.charAt(0) !== a.charAt(i)) {
      return false
    }
  }
  return true
}

export function createElement(element, attrs) {
  const elem = document.createElement(element)

  for (const key in attrs) {
    if (attrs.hasOwnProperty(key)) {
      elem.setAttribute(key, attrs[key])
    }
  }

  return elem
}

export function getAllSmallWidgetSections() {
  const sections = document.querySelectorAll(".section-widgets")

  const smallSections = []

  sections.forEach(section => {
    if (section.childElementCount < 4) {
      smallSections.push(section)
    }
  })

  return smallSections
}

function getCompleteSection() {
  const sections = document.querySelectorAll(".section-widgets")

  let completeSection

  sections.forEach(section => {
    if (section.childElementCount >= 4) {
      completeSection = section
    }
  })

  return completeSection
}

export function getGlobalWidgetWidth() {
  return $(getCompleteSection().firstElementChild).width()
}

export function getCSSRule(filename) {
  for (const ss of document.styleSheets) {
    if (ss.href.includes(filename)) {
      return ss.cssRules
    }
  }
}

export function modifyCSSSelector(filename, selectorText, newProps) {
  const rules = getCSSRule(filename)
  for (const rule of rules) {
    if (rule.selectorText !== selectorText) {
      continue
    }
    for (const prop in newProps) {
      if (newProps.hasOwnProperty(prop)) {
        rule.style[prop] = newProps[prop]
      }
    }
    break;
  }
}

// -- Not used (yet) --

// function arrayEqual(a, b) {
//   return a.every((val, idx) => val === b[idx])
// }