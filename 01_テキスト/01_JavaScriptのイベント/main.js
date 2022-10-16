const button = document.getElementById("button")
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const keydown = function (e) {
  console.log(e.key)
}

inputText.onchange = keydown
inputDate.oninput = keydown

const alertMessage = function () {
  alert("クリックしたね")
}
button.onmouseover = alertMessage

document.onkeydown = function (e) {
  console.log(e.key)
}
