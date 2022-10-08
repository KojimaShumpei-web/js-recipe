const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const display1 = document.getElementById("display1")
const minusbutton = document.getElementById("minusButton")
let count = 30
plusButton.onclick = function () {
  count += 1
  display.textContent = count
}

minusbutton.onclick = function () {
  count -= 1
  display1.textContent = count
}
