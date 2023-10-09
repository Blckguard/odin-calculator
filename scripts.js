function add(num1, num2)
{
    return Number(num1) + Number(num2);
}
function subtract(num1, num2)
{
    return Number(num1) - Number(num2);
}
function multiply(num1, num2)
{
    return Number(num1) * Number(num2);
}
function divide(num1, num2)
{
    return Number(num1) / Number(num2);
}

function operate(num1, num2, operator)
{

    result = 0;
    switch(operator)
    {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
    }
    return result;
}

const screen = document.querySelector(".screen");
let displayValueOne = 0;
let displayValueTwo = 0;
let displayOperator;

// Number 1 Button
const buttonOne = document.querySelector(".buttonOne");
buttonOne.addEventListener("click", function (e) 
{
    if (Number(screen.textContent) < 1)
    {
        screen.textContent = 1;
    }
    else 
    {
        screen.textContent = screen.textContent + "1";
    }
});

// Number 2 Button
const buttonTwo = document.querySelector(".buttonTwo");
buttonTwo.addEventListener("click", function (e) 
{
    if (Number(screen.textContent) < 1)
    {
        screen.textContent = 2;
    }
    else 
    {
        screen.textContent = screen.textContent + "2";
    }
});

// Number 3 Button
const buttonThree = document.querySelector(".buttonThree");
buttonThree.addEventListener("click", function (e) 
{
    if (Number(screen.textContent) < 1)
    {
        screen.textContent = 3;
    }
    else 
    {
        screen.textContent = screen.textContent + "3";
    }
});

// Number 4 Button
const buttonFour = document.querySelector(".buttonFour");
buttonFour.addEventListener("click", function (e) 
{
    if (Number(screen.textContent) < 1)
    {
        screen.textContent = 4;
    }
    else 
    {
        screen.textContent = screen.textContent + "4";
    }
});

// Number 5 Button
const buttonFive = document.querySelector(".buttonFive");
buttonFive.addEventListener("click", function (e) 
{
    if (Number(screen.textContent) < 1)
    {
        screen.textContent = 5;
    }
    else 
    {
        screen.textContent = screen.textContent + "5";
    }
});

// Number 6 Button
const buttonSix = document.querySelector(".buttonSix");
buttonSix.addEventListener("click", function (e) 
{
    if (Number(screen.textContent) < 1)
    {
        screen.textContent = 6;
    }
    else 
    {
        screen.textContent = screen.textContent + "6";
    }
});

// Number 7 Button
const buttonSeven = document.querySelector(".buttonSeven");
buttonSeven.addEventListener("click", function (e) 
{
    if (Number(screen.textContent) < 1)
    {
        screen.textContent = 7;
    }
    else 
    {
        screen.textContent = screen.textContent + "7";
    }
});

// Number 8 Button
const buttonEight = document.querySelector(".buttonEight");
buttonEight.addEventListener("click", function (e) 
{
    if (Number(screen.textContent) < 1)
    {
        screen.textContent = 8;
    }
    else 
    {
        screen.textContent = screen.textContent + "8";
    }
});

// Number 9 Button
const buttonNine = document.querySelector(".buttonNine");
buttonNine.addEventListener("click", function (e) 
{
    if (Number(screen.textContent) < 1)
    {
        screen.textContent = 9;
    }
    else 
    {
        screen.textContent = screen.textContent + "9";
    }
});

// Number 0 Button
const buttonZero = document.querySelector(".buttonZero");
buttonZero.addEventListener("click", function (e) 
{
    if (Number(screen.textContent) < 1)
    {
        screen.textContent = 0;
    }
    else 
    {
        screen.textContent = screen.textContent + "0";
    }
});

// Clear Button
const buttonClear = document.querySelector(".buttonClear");
buttonClear.addEventListener("click", function (e)
{
    screen.textContent = 0;
});

// Plus Button
const buttonPlus = document.querySelector(".buttonPlus");
buttonPlus.addEventListener("click", function (e)
{
    displayValueOne = screen.textContent;
    displayOperator = "+";
    screen.textContent = 0;
})

// Minus Button
const buttonSubtract = document.querySelector(".buttonSubtract");
buttonSubtract.addEventListener("click", function (e)
{
    displayValueOne = screen.textContent;
    displayOperator = "-";
    screen.textContent = 0;
})

// Multiply Button
const buttonMultiply = document.querySelector(".buttonMultiply");
buttonMultiply.addEventListener("click", function (e)
{
    displayValueOne = screen.textContent;
    displayOperator = "*";
    screen.textContent = 0;
})

// Minus Button
const buttonDivide = document.querySelector(".buttonDivide");
buttonDivide.addEventListener("click", function (e)
{
    displayValueOne = screen.textContent;
    displayOperator = "/";
    screen.textContent = 0;
})

// Equals Button
const buttonEqual = document.querySelector(".buttonEqual");
buttonEqual.addEventListener("click", function (e)
{
    displayValueTwo = screen.textContent;
    screen.textContent = operate(displayValueOne, displayValueTwo, displayOperator);
})