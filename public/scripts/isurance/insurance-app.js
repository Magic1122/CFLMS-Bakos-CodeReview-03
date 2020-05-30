/* Saving the reference of our form element in a variable */
const submit = document.getElementById('calculateForm')

/* Adding an event listener to our form which listens to the submit event */
submit.addEventListener('submit', (e) => {
    /* Overriding (preventing) the submit events default behaviour (reload) */
    e.preventDefault()
    /* Saving the values from our input fields in variables and preparing our result paragraph element */
    const name = document.getElementById('name').value
    const horsePower = parseInt(document.getElementById('power').value)     // parseInt converts the values to integers so we can make calculations with them
    const age = parseInt(document.getElementById('age').value)
    const country = document.getElementById('country').value
    const resultP = document.getElementById('insuranceResult')

    /* Calling our functions from  insurance-app-functions.js to calculate the results and show it to the user and after this cleaning the input fields */
    generateResultDOM(calculateInsurance(horsePower, age, country), name, resultP)
    cleanInputFields()
})

