/* An API call to a random Chuck Norris joke, which we will use after to show it on the team.html page on clicking on a team member */

const getRandomChuckNorrisQuote = async () => {

    const url = 'https://api.chucknorris.io/jokes/random'

    const response = await fetch(url)
    if (response.status === 200) {
        const data = await response.json()
        return data.value
    } else {
        throw new Error('Unable to fetch quote')
    }
}

