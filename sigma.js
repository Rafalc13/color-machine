const sigma = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    let sigmaColor = '#';
    for(let i = 0; i < 6; i++){
        sigmaColor += sigma[getRandomNumber()];
    }
    color.textContent = sigmaColor;
    document.body.style.backgroundColor = sigmaColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * sigma.length);
}