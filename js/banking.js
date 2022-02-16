
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalElementText = totalElement.innerText;
    const previoustotal = parseFloat(totalElementText);
    totalElement.innerText = previoustotal + amount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal= getCurrentBalance();
    balanceTotal.innerText = previousBalanceTotal + amount;
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    else {
        alert("Write possitive value! & number type (English type)*");
    }
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const crrentBalance =  getCurrentBalance();
    const withdrawAmount = getInputValue('withdraw-input');
    if (withdrawAmount > 0 && withdrawAmount <= crrentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    else if(withdrawAmount > crrentBalance){
        alert('not supiciens balance!');
    }
    else {
        alert("Write possitive value! & number type (English type)*");
    }

})