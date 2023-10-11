
/* Basic operation functions */
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

/* Function to utilize operation functions */
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
let displayOperator = "";

const buttonOne = document.querySelector(".one");
const buttonTwo = document.querySelector(".two");
const buttonThree = document.querySelector(".three");
const buttonFour = document.querySelector(".four");
const buttonFive = document.querySelector(".five");
const buttonSix = document.querySelector(".six");
const buttonSeven = document.querySelector(".seven");
const buttonEight = document.querySelector(".eight");
const buttonNine = document.querySelector(".nine");
const buttonZero = document.querySelector(".zero");
const buttonDivision = document.querySelector(".division");
const buttonMultiply = document.querySelector(".multiply");
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");
const buttonEquals = document.querySelector(".equals");
const buttonDelete = document.querySelector(".delete")


// ---------------------- Number Buttons ---------------------- //
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

// ---------------------- Non-Number Buttons ---------------------- //
buttonDelete.addEventListener("click", function (e)
{
    screen.textContent = 0;
});

buttonPlus.addEventListener("click", function (e)
{
    if (screen.textContent != "0")
    {
        displayValueOne += Number(screen.textContent);
        screen.textContent = 0;
    }
    
    displayOperator = "+";
    screen.textContent = 0;
})

buttonMinus.addEventListener("click", function (e)
{
    if (screen.textContent != "0")
    {
        displayValueOne = Number(screen.textContent);
        screen.textContent = 0;
    }

    
    displayOperator = "-";
    screen.textContent = 0;
})

buttonMultiply.addEventListener("click", function (e)
{
    displayValueOne = screen.textContent;
    displayOperator = "*";
    screen.textContent = 0;
})

buttonDivision.addEventListener("click", function (e)
{
    displayValueOne = screen.textContent;
    displayOperator = "/";
    screen.textContent = 0;
})

buttonEquals.addEventListener("click", function (e)
{
    displayValueTwo = screen.textContent;
    screen.textContent = operate(displayValueOne, displayValueTwo, displayOperator);
    displayValueOne = 0;
    displayValueTwo = 0;
    displayOperator = "";
})
