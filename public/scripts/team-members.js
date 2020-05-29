teamMembers.map((member, index) => {

    const div = document.getElementById('team')

    div.innerHTML +=
        `<div class="team-member" id="team-member-${index + 1}">
            <div class="team-member__image-container">
                <img src=${member.image} alt="${member.name}" class="team-member__image">
        </div>
        <div class="team-member__info">
            <h1 class="team-member__name">${member.name}</h1>
            <h2 class="team-member__subtitle">Works as a/an ${member.position}
            <p class="team-member__text" id="quote${index + 1}"></p>
        </h2>
    </div>
</div>`
})

document.getElementById(`team-member-1`).addEventListener('click', () => {
    console.log('click')
    const p = document.getElementById(`quote1`)
    const quote = getRandomChuckNorrisQuote(p)
})

document.getElementById(`team-member-2`).addEventListener('click', () => {
    console.log('click')
    const p = document.getElementById(`quote2`)
    const quote = getRandomChuckNorrisQuote(p)
})

document.getElementById(`team-member-3`).addEventListener('click', () => {
    console.log('click')
    const p = document.getElementById(`quote3`)
    const quote = getRandomChuckNorrisQuote(p)
})
