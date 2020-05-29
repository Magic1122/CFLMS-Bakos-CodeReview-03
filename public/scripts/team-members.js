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
        </h2>
    </div>
</div>`
})