function randombackgroundColor() {
    const hex = "0123456789abcdef"
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * (15 - 0 + 1) + 0);
        if (i == 5 || i == 6 && hex[randomIndex] === 'f' || hex[randomIndex] === 'e') {
            color += '0';
        } else {
            color += hex[randomIndex];
        }
    }
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
}
let changingColor;
const ChangeColor = document.getElementById('Start');

ChangeColor.addEventListener('click', function () {
    // console.log('start');
    changingColor = setInterval(randombackgroundColor, 600);
});

document.getElementById('Stop').addEventListener('click', function () {
    clearInterval(changingColor)
    // console.log('end')
})