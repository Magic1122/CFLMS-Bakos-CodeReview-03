/* An API call to a random Chuck Norris joke, which we will use after to show it on the team.html page on clicking on a team member */

const getRandomChuckNorrisQuote = (paragraph) => {
    const url = 'https://api.chucknorris.io/jokes/random'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            paragraph.innerText = data.value
        })

}

