console.log('JS is running...')

const submit = document.getElementById('calculateForm')

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const horsePower = parseInt(document.getElementById('power').value)
    const age = parseInt(document.getElementById('age').value)
    const country = document.getElementById('country').value
    const resultP = document.getElementById('insuranceResult')

    generateResultDOM(calculateInsurance(horsePower, age, country), name, resultP)
    cleanInputFields()
})
