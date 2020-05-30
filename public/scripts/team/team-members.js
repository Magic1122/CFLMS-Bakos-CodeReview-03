/* Looping through the teamMembers array, map is a newer ES6 function, as a first argument we get access to the individul item, as a second to the index */

teamMembers.map((member, index) => {

    const div = document.getElementById('team')

    /* Generating the html structure */

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

/* Adding event listener to each individual member */

for (let i = 1; i <= 3; i++) {

    document.getElementById(`team-member-${i}`).addEventListener('click', async () => {
        const p = document.getElementById(`quote${i}`)
        try {
            const quote = await getRandomChuckNorrisQuote()
            p.innerText = quote
        } catch (e) {
            p.innerText = 'The cat took your quote :-)'
        }
    })
}

