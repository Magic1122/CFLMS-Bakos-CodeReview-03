const getRandomChuckNorrisQuote = (paragraph) => {
    const url = 'https://api.chucknorris.io/jokes/random'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            paragraph.innerText = data.value
        })

}

