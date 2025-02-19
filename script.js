const vcards = document.querySelectorAll('.video-card');

vcards.forEach((card) => {
    const infoCard = card.querySelector('.info-card');
    
    card.addEventListener('mouseover', () => {
        card.style.width = '560px';
        infoCard.classList.add("mystyle");
    });

    card.addEventListener('mouseout', () => {
        card.style.width = '300px';
        infoCard.classList.remove("mystyle");
    });
});
