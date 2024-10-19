const gifButton = document.getElementById('gifButton') as HTMLButtonElement;
const gifContainer = document.getElementById('gifContainer') as HTMLElement;

const funnyGifs: string[] = [
    "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif", // Example GIFs
    "https://media.giphy.com/media/l0HlPjezYYVwnInUA/giphy.gif",
    "https://media.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif",
];

gifButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * funnyGifs.length);
    const gifUrl = funnyGifs[randomIndex];

    gifContainer.innerHTML = `<img src="${gifUrl}" alt="Funny GIF">`;
});
