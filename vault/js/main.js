var codeContainer = document.getElementById("code-container");
var clickCounter = 0;
var numberOne;
var numberTwo;
var numberThree;
var correctCodeBlock = document.getElementById("correctcodelight");
var wrongCodeBlock = document.getElementById("wrongcodelight");
var intervalTimer = 0;
var codeButtons = document.getElementsByClassName("codebuttons");
var correctSound = new Audio("sounds/correct.mp3");
var wrongSound = new Audio("sounds/wrong.mp3");
var correctCounter = 0;
var wrongCounter = 0;


function getNumber(clickedButton) 
{
    clickCounter++;
    codeContainer.innerHTML += clickedButton.value;

    if(clickCounter == 1)
    {
        numberOne = clickedButton.value;
    }
    else if(clickCounter == 2)
    {
        numberTwo = clickedButton.value;
    }
    else
    {
        numberThree = clickedButton.value;
    }

    if(clickCounter == 3)
    {
        for(i=0; i < codeButtons.length; i++) 
        {
            codeButtons[i].setAttribute('disabled', 'disabled');
        }

        if(numberOne == 3 && numberTwo == 2 && numberThree == 2)
        {
            outputcode.innerHTML = "Correct code";
            correctCounter++;
            correctcounter.innerHTML = "Correct: " + correctCounter;
            correctSound.play();
            var correctBlink = setInterval(function() 
            {
                intervalTimer++;

                if (correctCodeBlock.style.visibility == 'hidden')
                {
                    correctCodeBlock.style.visibility = 'visible';
                }
                else
                {
                    correctCodeBlock.style.visibility = 'hidden';
                }

                if(intervalTimer == 10)
                {
                    clearInterval(correctBlink);
                    for(i=0; i < codeButtons.length; i++) 
                    {
                        codeButtons[i].removeAttribute('disabled');
                    }
                    outputcode.innerHTML = "";
                    codeContainer.innerHTML = "";
                    clickCounter = "";
                    numberOne = "";
                    numberTwo = "";
                    numberThree = "";  
                    intervalTimer = 0;
                    //correctSound.stop();   
                }
            }, 500);
        }
        else
        {
            outputcode.innerHTML = "Wrong code";
            wrongCounter++;
            wrongcounter.innerHTML = "Incorrect: " + wrongCounter;
            wrongSound.play();
            var wrongBlink = setInterval(function() 
            {
                intervalTimer++;

                if (wrongCodeBlock.style.visibility == 'hidden')
                {
                    wrongCodeBlock.style.visibility = 'visible';
                }
                else
                {
                    wrongCodeBlock.style.visibility = 'hidden';
                }

                if(intervalTimer == 10)
                {
                    clearInterval(wrongBlink);
                    for(i=0; i < codeButtons.length; i++) 
                    {
                        codeButtons[i].removeAttribute('disabled');
                    }

                    outputcode.innerHTML = "";
                    codeContainer.innerHTML = "";
                    clickCounter = "";
                    numberOne = "";
                    numberTwo = "";
                    numberThree = ""; 
                    intervalTimer = 0;
                    //wrongSound.stop(); 
                }
            }, 500);
        }
    }

    console.log(numberOne);
    console.log(numberTwo);
    console.log(numberThree);
}