const buttons=document.querySelectorAll("button");
let sum=document.querySelector(".sum p");
let lastOperator;
let lastNumer;

buttons.forEach((button)=> {button.addEventListener('click', ()=>{
    const clickedButton=event.target.value;

    switch (clickedButton){
        case "c":
            sum.textContent="0";
            break;
        default:
            displayValue(clickedButton);
    }
    
    
    })
})


//Function to display clicked number on the screen.
function displayValue(clickedButton)
{
    if(clickedButton==="," && sum.textContent.includes(",")===false)  //Prevent displaying "," character more than once.
    {
        sum.textContent+=clickedButton;
    }
    else
    {
        clickedButton=parseInt(clickedButton);
        
        if (Number.isInteger(clickedButton)) //Prevent to display parameters on screen.
        if(sum.textContent==="0")
            {
                sum.textContent=clickedButton;
            }
            else
            {
                sum.textContent+=clickedButton;
            }
    }
}

