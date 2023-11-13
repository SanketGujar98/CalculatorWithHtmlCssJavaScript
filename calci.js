let inputbox= document.getElementById('inputbox')
let buttons=document.querySelectorAll('input')
let string=""
let arr=Array.from(buttons)
arr.forEach(input=>{
    input.addEventListener('click',(e)=>{
        if(e.target.value == "=")
        {
            string=eval(string)
            inputbox.value=string;
        }
        else if(e.target.value == "AC")
        {
            string=""
            inputbox.value=string;
        }
        else if(e.target.value == "Del")
        {
            string=string.substring(0,string.length-1)
            inputbox.value=string;
        }
        else{
            string=string+e.target.value;
            inputbox.value=string;
        }

    })
})


// the “e” in the bracket of an arrow function in JavaScript is a parameter that represents the event object. The event object contains information about the event that triggered the function, such as the type of the event, the target element, the coordinates of the mouse, the key pressed, and so on. For example, if you have an arrow function as a click handler for a button, you can use “e” to access the properties of the click event, such as e.target (the button element), e.clientX (the horizontal coordinate of the mouse), e.shiftKey (whether the shift key was pressed), and so on. You can name the parameter anything you want, but “e” is a common convention. Here is an example of using an arrow function with an event parameter: