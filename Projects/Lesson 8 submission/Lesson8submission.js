function input_number()
{
    let input = window.prompt("Input a number");
    let outputs = [];

    for(x = 1; x<=10; x++)
    {
        outputs[x-1] = input * x;
    }
    let child = document.createElement("p");
    child.innerHTML = outputs;
    let a = document.getElementById("a");
    a.appendChild(child);
}

// initial buttons

let start_colors = [];
let arr_buttons = [];
for(x=0;x<10;x++)
    {
        let btn = document.createElement("button");
        btn.innerHTML = "||||||||||";
        document.body.appendChild(btn);
        arr_buttons[x] = btn;
        random_color(x);
        start_colors[x] = arr_buttons[x].style.backgroundColor;
    }
//console.log(start_colors);


let link = document.getElementById("b");

function buttons(i)
{
    if(i.value === "reset")
    {
        for(x=0;x<10;x++)
        {
            arr_buttons[x].style.backgroundColor = start_colors[x];
        }
    }
    if(i.value === "red")
    {
        set_color("red");
    }
    if(i.value === "blue")
    {
        set_color("blue");
    }
    if(i.value === "green")
    {
        set_color("green");
    }
    if(i.value === "random")
    {
        x = 0;
        for(x=0;x<10;x++)
        {
            random_color(x);
        }
    }

}
function set_color(color)
{
    for(x=0;x<10;x++)
    {
        arr_buttons[x].style.backgroundColor = color;
    }   
    
}
function random_color(x)
{
   
    arr_buttons[x].style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    
}