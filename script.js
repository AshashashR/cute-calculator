const keys = [...document.querySelectorAll('.button')];
const keyCodeList = keys.map(key => key.dataset.key);
const output = document.querySelector('.output');


document.addEventListener('keydown', (e) => {
    const value = e.keyCode.toString();
    calculate(value);
})


document.addEventListener('click', (e) => {
    const value = e.target.dataset.key;
    calculate(value);
})

const calculate = (value) => {
    if (keyCodeList.includes(value)) {
        switch(value) {
            case '8':
                output.textContent = "";
                break;
            case '13':
                const calculation = eval(output.textContent);
                output.textContent = calculation;
                break;
            default:
                const keyCodeIndex = keyCodeList.indexOf(value);
                const key = keys[keyCodeIndex];
                output.textContent += key.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert(e.message);
})