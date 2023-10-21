const firstFactorElement = document.querySelector('#first-factor')
const secondFactorElement = document.querySelector('#second-factor')
const productInput = document.querySelector('#product')

let firstFactor = 0
let secondFactor = 0

let result = 0

function init() {
	generateEquation()
}

function generateEquation() {
	firstFactor = Math.ceil(Math.random() * 10)
	secondFactor = Math.ceil(Math.random() * 10)

	result = firstFactor * secondFactor

	firstFactorElement.innerHTML = firstFactor
	secondFactorElement.innerHTML = secondFactor
}

init()
