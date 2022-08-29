const screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = "";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('this button is press', buttonText)
    
    if(buttonText === "x"){
        buttonText = "*";
        screenValue += buttonText;
        screen.value = screenValue;
    }
    else if(buttonText ===  "AC"){
        screenValue = "";
        screen.value = screenValue
    }
    else if(buttonText === "="){
        screen.value = eval(screenValue)
    }
    else if (buttonText === "÷"){
        buttonText = "/";
        screenValue += buttonText;
        screen.value = screenValue
    }
    else{
        screenValue += buttonText;
        screen.value = screenValue
    }
    })
}