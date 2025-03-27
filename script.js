const buttons=document.querySelectorAll("button");
let sum=document.querySelector(".sum p");
let lastOperator;
let lastButton;
let lastNumber=0;
let currentNumber;

buttons.forEach((button)=> {button.addEventListener('click', ()=>{
    const clickedButton=event.target.value;

    switch (clickedButton){
        case "c":
            sum.textContent="0";
            lastOperator=undefined;
            lastButton=undefined;
            lastNumber=0;
            currentNumber=undefined;
            break;
        case "+/-":
            if(sum.textContent.includes("-")===false){
                sum.textContent="-"+sum.textContent;
            }
            else{
                sum.textContent=sum.textContent.replace("-","");
            }
            break;
        case "%":
            sum.textContent=parseFloat(sum.textContent)/100;
            lastNumber=parseFloat(sum.textContent);
            lastButton=clickedButton;
            lastOperator=clickedButton;
            break;
        case "/":
            returnResult();
            lastNumber=parseFloat(sum.textContent);
            lastButton=clickedButton;
            lastOperator=clickedButton;
            break;
        case "*":
            returnResult();
            lastNumber=parseFloat(sum.textContent);
            lastButton=clickedButton;
            lastOperator=clickedButton;
            break;
        case "-":
            returnResult();
            lastNumber=parseFloat(sum.textContent);
            lastButton=clickedButton;
            lastOperator=clickedButton;
            break;
        case "+":
            returnResult();
            lastNumber=parseFloat(sum.textContent);
            lastButton=clickedButton;
            lastOperator=clickedButton;
            break;
        case "=":
            returnResult();
            lastNumber=parseFloat(sum.textContent);
            lastButton=clickedButton;
            break;
        case ".":
            if(sum.textContent.includes(".")===false)
            {
                sum.textContent+=".";
            }
            lastButton=".";
            break;
        default:
            updateDisplay(clickedButton);
            lastButton=clickedButton;
    }
    
    if(sum.textContent.length>9){
        sum.textContent=sum.textContent.substring(0,9);
    }
    
    })
})



//Function to display clicked number on the screen.
function updateDisplay(clickedButton)
{
    if(sum.textContent==="0" || lastButton==="/" || lastButton==="*" || lastButton==="-" || lastButton==="+"){
        sum.textContent=clickedButton;
    }
    else{
        sum.textContent+=clickedButton;
    }
}


function returnResult(){
    if(Number.isInteger(parseInt(lastButton))===true){
        currentNumber=parseFloat(sum.textContent);
        switch (lastOperator){
            case "+":
                return sum.textContent=(lastNumber+currentNumber).toString();
            case "-":
                return sum.textContent=(lastNumber-currentNumber).toString();
            case "*":
                return sum.textContent=(lastNumber*currentNumber).toString();
            case "/":
                return sum.textContent=(lastNumber/currentNumber).toString();
            default:
                
        }
    }
        
}