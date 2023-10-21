const firstFactorElement = document.querySelector('#first-factor')
const secondFactorElement = document.querySelector('#second-factor')
const productInput = document.querySelector('#product')
const errorElement = document.querySelector('#error')

let firstFactor = 0
let secondFactor = 0

let result = 0

function init() {
	hideError()
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
	hideError()
	if (event.keyCode !== 13) return

	let input = productInput.value

	if (!input) return showError()

	if (input == result) generateNewEquation()
	else showError()
})

function showError() {
	errorElement.style.opacity = 1
}

function hideError() {
	errorElement.style.opacity = 0
}

init()
