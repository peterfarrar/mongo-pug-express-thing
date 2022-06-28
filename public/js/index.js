getthemodal = (event) => {
  const id = event.currentTarget.parentNode.id
  const data = { id }

  fetch('/meaning', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    const { meaning, idiom } = data
    const idiomParagraph = document.querySelector('.modal-idiom')
    const meaningParagraph = document.querySelector('.modal-meaning')
    const modal = document.querySelector('#add-meaning')
    idiomParagraph.textContent = idiom + ":"
    meaningParagraph.textContent = meaning
    modal.style.visibility = 'visible'
  })
  .catch((error) => {
    console.error('Error:', error);
  })
}

clearModal = (event) => {
  const modal = event.currentTarget
  modal.style.visibility = 'hidden'
}

window.addEventListener('load', (event) => {
  const idioms = document.querySelectorAll('.idiom')
  idioms.forEach(idiom => idiom.onclick = getthemodal)
  const modal = document.querySelector('#add-meaning')
  modal.onclick = clearModal
})
