const valueInput = document.querySelector('.js-value-input')
const currencySelector = document.querySelector('.js-currency-selector')
const output = document.querySelector('.js-output')

function getInput () {
    return {
        rub: Number(valueInput.value),
        currency: currencySelector.value
    }
}

function render(result) {
    output.innerText = result;
}

valueInput.addEventListener('input',function() {
    
    const result = convert(getInput());

    render(result);
})

currencySelector.addEventListener('change',function(){
    const result = convert(getInput());

    render(result);
})