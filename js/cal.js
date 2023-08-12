function getInputTextById(event){
    const inputText = document.getElementById(event);
    const inputTextString =inputText.value;
    const inputAmount = parseFloat(inputTextString);
    return inputAmount;
}

function getPTextById(event){
    const pText = document.getElementById(event);
    const pTextString =pText.innerText;
    const pAmount = parseFloat(pTextString);
    return pAmount;
}

function setElementTextById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('calcul-btn').addEventListener('click', function(){
    const totalIncome = getInputTextById('income-input');
    const foodAmount = getInputTextById('food-input');
    const rentAmount = getInputTextById('rent-input');
    const clothsAmount = getInputTextById('cloths-input');

    
    const allExpence = foodAmount + rentAmount + clothsAmount;
    const totalBalence = totalIncome - allExpence;
    setElementTextById("total-exp", allExpence);
    setElementTextById('bal-amo', totalBalence);
})

document.getElementById('save-btn').addEventListener('click', function(){
    const saveAmount = getInputTextById('save-input');
    const totalBalence = getPTextById('bal-amo');
    if(totalBalence <= 0){
        alert('No Balence')
        return;
    }
    const savingBalence = (saveAmount*totalBalence) / 100;;
    const remBalence = totalBalence - savingBalence;

    setElementTextById('save-amount', savingBalence);
    setElementTextById('total-rem-bal', remBalence);


})