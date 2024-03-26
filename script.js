window.onload = () => {


    setTimeout(() => {
        startCycle();
    }, 2000);
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