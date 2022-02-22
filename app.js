const board = document.querySelector('#board')
const colors = ['#322CDC','#2CDC43', '#DC2C3B', '#C5DC2C', '#DC2CC5']
const SQUARE_NUMBER = 500

for (let i = 0; i < SQUARE_NUMBER; i++) {
 const square = document.createElement('div')
 square.classList.add('square')

square.addEventListener('mouseover', setColor)

square.addEventListener('mouseleave', removeColor)


 board.append(square)
}

function setColor(event) {
  const Element = event.target
  const color = getRandomColor()
  Element.style.backgroundColor = color
  Element.style.boxShadow = `0 0 0 2px ${color}, 0 0 10px ${color}`

}
function removeColor(event) {
  const Element = event.target
  Element.style.backgroundColor = '#fff'
  Element.style.boxShadow = `0 0 2px #fff`
}
function getRandomColor(){
  return colors[Math.floor(Math.random() * colors.length)]
}