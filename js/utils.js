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