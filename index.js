function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'Error: Division by zero';
    }
    return num1 / num2;
}

function handleClick(character) {
    const inputbox = document.querySelector('.inputbox');
    if (inputbox) {
        inputbox.innerHTML += character;
    }
}

function handleDelete() {
    const inputbox = document.querySelector('.inputbox');
    if (inputbox) {
        inputbox.innerHTML = inputbox.innerHTML.slice(0, -1);
    }
}

for (let i = 0; i < 10; i++) {
    const button = document.getElementById(i);
    if (button) {
        button.addEventListener('click', () => handleClick(i));
    }
}

let charArray = ['+', '-', '*', '/'];
for (let i = 0; i < charArray.length; i++) {
    const button = document.getElementById(charArray[i]);
    if (button) {
        button.addEventListener('click', () => handleClick(charArray[i]));
    }
}
/// delete button ///
const deleteButton = document.querySelector('.delete');
if (deleteButton) {
    deleteButton.addEventListener('click', handleDelete);
}

function operator() {
    const inputbox = document.querySelector('.inputbox');
    if (!inputbox) {
        return 'Input box not found';
    }

    const input = inputbox.innerHTML.trim();
    let result;

    try {
        // Use regex to split the input into numbers and operator
        const match = input.match(/([+-]?\d+)([+\-*/])([+-]?\d+)/);
        if (!match) {
            // Handle cases where the input is a single number with an optional sign
            const singleNumberMatch = input.match(/[+-]?\d+/);
            if (singleNumberMatch) {
                return singleNumberMatch[0];
            }
            return 'Invalid input';
        }

        const num1 = parseFloat(match[1]);
        const operator = match[2];
        const num2 = parseFloat(match[3]);

        switch (operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
            default:
                result = 'Invalid operator';
        }
    } catch (error) {
        result = 'Error: ' + error.message;
        console.log(error);
    }

    return result;
}

const equalButton = document.querySelector('.equal-button');
equalButton.addEventListener('click', () => {
    let outputbox = document.querySelector('.outputbox');
    let output = operator();
    if (outputbox) {
        outputbox.innerHTML = output;
    }
    return;
});

/// clear button ///
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    document.querySelector('.inputbox').innerHTML = '';
});


