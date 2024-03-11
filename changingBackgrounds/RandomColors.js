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
const ChangeColor = document.getElementById('ball');

ChangeColor.addEventListener('click', function () {

    let target = 70;
    let curr = 0;
    console.log(curr);
    let Interval = setInterval(() => {
        curr++;
        document.getElementById('ball').style.marginLeft = curr + '%'
        if (curr >= target) {
            if (!changingColor) {
                changingColor = setInterval(randombackgroundColor, 600);
            }
            clearInterval(Interval);
        };
    }, 1)


});

document.getElementById('ball').addEventListener('click', function () {
    clearInterval(changingColor)
    changingColor = null;
    // console.log('end')
})
