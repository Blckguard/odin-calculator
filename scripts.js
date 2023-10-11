
/* ------------------------------------------- Declaring Variables ------------------------------------------- */
const display = document.querySelector(".display");
let valueOne = 0;
let valueTwo = 0;
let operator = "";
let result = 0;

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

let numButtons = [buttonZero, buttonOne, buttonTwo, buttonThree, buttonFour, 
                    buttonFive, buttonSix, buttonSeven, buttonEight, buttonNine]

/* ---------------------------------------- Basic operation functions ---------------------------------------- */
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

/* --------------------------------- Function to utilize operation functions --------------------------------- */
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


/* ------------------------------------- giving number Buttons function ------------------------------------- */


for (let i = 0; i < numButtons.length; i++)
{
    numButtons[i].addEventListener("click", function (e) 
    {
        if (Number(display.textContent) < 1)
        {
            display.textContent = i;
        }
        else 
        {
            display.textContent = display.textContent + `${i}`;
        }
    });
}

// ---------------------- Non-Number Buttons ---------------------- //
buttonDelete.addEventListener("click", function (e)
{
    display.textContent = 0;
});

buttonPlus.addEventListener("click", function (e)
{
    valueOne = display.textContent;
    operator = "+";
    display.textContent = 0;
})

buttonMinus.addEventListener("click", function (e)
{
    
})

buttonMultiply.addEventListener("click", function (e)
{
    
})

buttonDivision.addEventListener("click", function (e)
{
    
})

buttonEquals.addEventListener("click", function (e)
{
    valueTwo = display.textContent;
    display.textContent = operate(valueOne, valueTwo, operator);
    valueOne = 0; 
    valueTwo = 0; 
    operator = "";
})
