const imageElement = document.getElementById("dog-image")

fetch()
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    imageElement.src = data.message
  })
