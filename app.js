const firstFactorElement = document.querySelector('#first-factor')
const secondFactorElement = document.querySelector('#second-factor')
const productInput = document.querySelector('#product')

let firstFactor = 0
let secondFactor = 0

let result = 0

function init() {
	generateNewEquation()
}

function generateNewEquation() {
	firstFactor = Math.ceil(Math.random() * 10)
	secondFactor = Math.ceil(Math.random() * 10)

	result = firstFactor * secondFactor

	productInput.value = ''

	firstFactorElement.innerHTML = firstFactor
	secondFactorElement.innerHTML = secondFactor
}

productInput.addEventListener('keydown', (event) => {
	let input = productInput.value

	if (event.keyCode !== 13) return
	if (!input) {
		// TODO | indicate that the wrong answer was inputed
		return
	}

	if (input == result) generateNewEquation()
})

init()
