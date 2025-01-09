const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

const idToSymbol = {
    divide: '/',
    multiply: '*',
    add: '+',
    subtract: '-',
};

buttons.forEach((item) => {
        item.addEventListener('click',() =>{
            if(item.id === 'clear'){
                display.innerText = '';
            }else if (item.id ==='backspace'){
                display.innerText=display.innerText.slice(0,-1);
            }else if (item.id ==='equal'){
                if(display.innerText ===''){
                    display.innerText='Please enter a valid expression';
                    setTimeout(() => (display.innerText=''),2000);
                }else{
                    try{
                        display.innerText=/^[\d+\-*/().\s]+$/.test(display.innerText)? 
                        eval(display.innerText)
                        : 'Error';
                } catch (e) {
                    display.innerText = 'Error';
                }
            }
        } else {
            display.innerText += idToSymbol[item.id] || item.id;
        }
    });
});

const themeTogglerBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
let isDark = true;
themeTogglerBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeTogglerBtn.classList.toggle('active');
    isDark = !isDark;
}
