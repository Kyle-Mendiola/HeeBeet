function main() {
  $(document).ready(() => {
    $("button.scramble").click(() => {
      let input = $(".canvas .text-input").val()

      // Default output is the input
      $("span.output").html(input)

      if (input.length === 0) {
        console.log("Empty");
        return
      }
      if(isOneCharString(input)){
        console.log("Is one char");
        return
      }
      
      let output = shuffleString(input)

      $("span.output").html(output)
    });
  });
}

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
  while(scrambled === a){
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

main();
