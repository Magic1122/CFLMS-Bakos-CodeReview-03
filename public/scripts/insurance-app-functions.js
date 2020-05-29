const calculateInsurance = (horsePower, age, country) => {
    let insurance = ''

    if (horsePower < 40 || age < 18 ) {
        insurance = `The minimum age to make an insurance is 18 and your car can not be weaker than 40HP.`
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

const generateResultDOM = (calculationResult, name, pElement) => {

    if (typeof calculationResult !== 'number') {
        pElement.innerText = calculationResult
    } else {
        const nameArray = name.split(' ')
        pElement.innerText = `Dear ${nameArray[0].toString()}. According to the provided information, your insurance would cost ${calculationResult.toFixed(2)}$ a year.`
    }
}

const cleanInputFields = () => {
    document.getElementById('name').value = ''
    document.getElementById('power').value = ''
    document.getElementById('age').value = ''
    document.getElementById('country').value = ''
}

