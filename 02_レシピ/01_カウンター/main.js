const display = document.getElementById("display")
const plusbutton = document.getElementById("plus-button")
const minusbutton = document.getElementById("minus-button")
const baibutton = document.getElementById("bai-button")

let count = 0
plusbutton.onclick = function () {
  count++
  display.textContent = count
}
minusbutton.onmousemove = function () {
  count--
  display.textContent = count
}
baibutton.onclick = function () {
  count *= 2
  display.textContent = count
}
