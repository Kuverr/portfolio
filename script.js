window.onload = () => {


    setTimeout(() => {
        startCycle();
    }, 2000);

    backgroundTest();
};


// Text cycler

let cyclerEl = document.querySelector('#startCycler');
let cyclerContent = [
    'strony internetowe',
    'aplikacje',
    'aplikacje mobilne',
    'ui/ux',
    'grafiki',
    'loga',
    'z pasji',
];

function startCycle() {

    let currentContent = cyclerEl.textContent;

    let randomIndex = Math.floor(Math.random() * cyclerContent.length);

    let newContent = cyclerContent[randomIndex];

    if (currentContent === newContent) {
        startCycle();
        return;
    }

    for (let i = 0; i <= currentContent.length; i++) {
        setTimeout(() => {
            cyclerEl.textContent = currentContent.slice(0, currentContent.length - i);
        }, i * 50);
    }

    setTimeout(() => {
        for (let i = 0; i <= newContent.length; i++) {
            setTimeout(() => {
                cyclerEl.textContent = newContent.slice(0, i);
            }, i * 50 + currentContent.length * 50);
        }
    }, 200);

    setTimeout(() => {
        startCycle();
    }, 5000);
}

function backgroundTest() {
    //document width and scroll height
    let docWidth = document.documentElement.scrollWidth;
    let docHeight = document.documentElement.scrollHeight;

    let svg = ` <svg xmlns="http://www.w3.org/2000/svg" width="${docWidth}" height="${docHeight}">`;
    for (let i = 0; i < 20; i++) {


        let x1 = Math.floor(Math.random() * docWidth);
        let y1 = Math.floor(Math.random() * docHeight);
        let x2 = Math.floor(Math.random() * docWidth);
        let y2 = Math.floor(Math.random() * docHeight);

        svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="stroke:rgb(0, 123, 255);stroke-width:2" />`;
    }
    svg += `</svg>`;

    document.querySelector('main').style.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(svg)}')`;
}