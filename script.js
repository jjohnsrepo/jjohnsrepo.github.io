var count = 1

function select(input) {
  if (count % 2 === 0) {
    input.textContent = "O"
    input.className = "used2"
  } else {
    input.textContent = "X"
    input.className = "used1"
  }

  count += 1

  if (count === 10) {
    alert("The game is over")
  }
}
