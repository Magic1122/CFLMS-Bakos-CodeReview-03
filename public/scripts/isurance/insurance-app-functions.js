/* Calculates the insurance from the given values */

const calculateInsurance = (horsePower, age, country) => {
    let insurance = ''

    if (horsePower < 40 || age < 18 ) {
        return `The minimum age to make an insurance is 18 and your car can not be weaker than 40HP.`
    }

    if (country === 'austria') {
        insurance = horsePower * 100 / age + 50
    } else if (country === 'greece') {
        insurance = horsePower * 150 / (age + 3) + 50
    } else {
        insurance = horsePower * 120 / age + 100
    }

    return insurance
}

/* Shows our result to the user */

const generateResultDOM = (calculationResult, name, pElement) => {
    
    if (typeof calculationResult !== 'number') {
        pElement.innerText = calculationResult
    } else {
        /* We split the string name by ' ' to get an array and use the 0 element of the array in our result string */
        const nameArray = name.split(' ')
        pElement.innerText = `Dear ${nameArray[0].toString()}. According to the provided information, your insurance would cost ${calculationResult.toFixed(2)}$ a year.`
    }
}

/* Cleans the input areas */

const cleanInputFields = () => {
    document.getElementById('name').value = ''
    document.getElementById('power').value = ''
    document.getElementById('age').value = ''
    document.getElementById('country').value = ''
}

