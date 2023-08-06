let input = document.getElementById("item")
let buttons = document.querySelectorAll("button");
let c_display = document.getElementById("cdisplay");
let Calculator = document.getElementById("calculator")

let string = "";
let arr = Array.from(buttons)


let colorarr = ["red", "blue", "green", "grey", "wheat", "purple","#7d8d8c","#4a4b5d"]
let currentColorIndex = -1;
console.log(colorarr)


arr.forEach(item => {
    item.addEventListener('click', (d) => {
        if (d.target.innerHTML == "ON")
        {
            string = "Welcome to Online Calculator"
            input.innerHTML = string;
            string = "";
            setTimeout(() => {
                string = "0"
                input.innerHTML = string;
                setTimeout(() => {
                    string = "";
                    input.innerHTML = string;
                },1000)
    
            },2000)
           
            arr.forEach(item => {
                item.addEventListener('click', (e) => {
                        if (e.target.innerHTML == "=") {
                            string = eval(string);
                            input.innerHTML = string;
                        }
                
                        else if (e.target.innerHTML == "AC") {
                            string = "";
                            input.innerHTML = string;
                
                            
                        }
                            
                        else if (e.target.innerHTML == "DEL") {
                            string = string.substring(0, string.length - 1)
                            input.innerHTML = string;
                        }
                             
                            
                        else if (e.target.innerHTML == "OFF") {
                            string = "ThankYou for Using the Calculator"
                            input.innerHTML = string;
                            setTimeout(() => {
                                location.reload();
                            }, 2000);
                          
            
                        }
                            
                        else if (e.target.innerHTML == "Change Display Color") {
                            let nextColorIndex = ++currentColorIndex % colorarr.length;
                            c_display.style.backgroundColor = colorarr[nextColorIndex]

                           
                            
                        }
                            
                        else if (e.target.innerHTML == "Change calculator Color") {
                            let nextColorIndex = ++currentColorIndex % colorarr.length;
                            Calculator.style.backgroundColor = colorarr[nextColorIndex]

                           
                            
                        }
                            
                
                        else {
                            string += e.target.innerHTML;
                            input.innerHTML = string;
                        }
            
                    
                 
            
            
            
                })
            
            })
        }
        else {
            buttons.disabled = true;
        }
     
    })
})









 