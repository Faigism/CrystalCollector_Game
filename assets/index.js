const crystalImages = document.querySelectorAll('.crystal img')
const numberMatch = document.querySelector('.numberMatch')
const lightBlueCrystal = document.querySelector('.lightBlue')
const blueCrystal = document.querySelector('.blue')
const redCrystal = document.querySelector('.red')
const pinkCrystal = document.querySelector('.pink')
const calculateScore = document.querySelector('.calculate-score')
const win = document.querySelector('.win')
const lose = document.querySelector('.lose')
let num1, num2, num3, num4
let score = 0
let winScore = 0
let loseScore = 0
let resultScore = 10
function randomNumberToMatch() {
  return Math.floor(Math.random() * (100 - 50 + 1)) + 50
}
function randomNumberCrystalImage() {
  do {
    num1 = Math.floor(Math.random() * 9) + 1
    num2 = Math.floor(Math.random() * 9) + 1
    num3 = Math.floor(Math.random() * 9) + 1
    num4 = Math.floor(Math.random() * 9) + 1
  } while (
    num1 === num2 ||
    num1 === num3 ||
    num1 === num4 ||
    num2 === num3 ||
    num2 === num4 ||
    num3 === num4
  )
  console.log(num1, num2, num3, num4)
}
randomNumberCrystalImage()
numberMatch.textContent = randomNumberToMatch()

crystalImages.forEach((image) => {
  image.addEventListener('click', () => {
    if (image.classList.contains('lightBlue')) {
      calculateScore.textContent = score += num1
    } else if (image.classList.contains('blue')) {
      calculateScore.textContent = score += num2
    } else if (image.classList.contains('red')) {
      calculateScore.textContent = score += num3
    } else if (image.classList.contains('pink')) {
      calculateScore.textContent = score += num4
    }
    if (parseInt(numberMatch.textContent) === score) {
      win.textContent = ++winScore
      numberMatch.textContent = randomNumberToMatch()
      score = 0
      calculateScore.textContent = 0
      randomNumberCrystalImage()
    } else if (parseInt(numberMatch.textContent) < score) {
      lose.textContent = ++loseScore
      numberMatch.textContent = randomNumberToMatch()
      score = 0
      calculateScore.textContent = 0
      randomNumberCrystalImage()
    }
    if (winScore === resultScore) {
      alert('Qalib geldiniz..')
      window.location.reload()
    } else if (loseScore === resultScore) {
      alert('Meglub oldunuz..')
      window.location.reload()
    }
  })
})
