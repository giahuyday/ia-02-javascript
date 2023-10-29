let operator = '';

function setMath(operation) {
    operator = operation.value;
}

function calculate() {
    const resultElement = document.getElementById('result');
    
    const number1Field = document.getElementById('number1');
    const number2Field = document.getElementById('number2');

    const number1 = parseFloat(number1Field.value);
    const number2 = parseFloat(number2Field.value);

    if (isNaN(number1) || isNaN(number2)) {
        window.alert("Vui lòng nhập số thực hơp lệ và đủ 2 số")
        resultElement.value = 'Vui lòng nhập số hợp lệ.';
        return;
    }
    console.log(operator)

    switch (operator) {
        case 'addition':
            resultElement.value = number1 + number2;
            break;
        case 'substraction':
            resultElement.value = number1 - number2;
            break;
        case 'multiple':
            resultElement.value = number1 * number2;
            break;
        case 'division':
            if (number2 !== 0) {
                resultElement.value = number1 / number2;
            } else {
                resultElement.value = 'Không thể chia cho 0.';
            }
            break;
        default:
            window.alert("Vui lòng chọn phép toán bạn muốn thực hiện!")
            resultElement.value = 'Vui lòng chọn phép toán bạn muốn thực hiện.';
    }
}
