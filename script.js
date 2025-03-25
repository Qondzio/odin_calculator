const buttons=document.querySelectorAll("button");
const sum=document.querySelector(".sum p");
let lastOperator;
let lastNumer;

buttons.forEach((button)=> {button.addEventListener('click', ()=>{
    const clickedButton=event.target.value;

    displayValue(clickedButton);
    
    })
})


//Function to display clicked number on the screen.
function displayValue(clickedButton)
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