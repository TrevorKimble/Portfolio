function check(a)
{
    let value = rps();

    let child1 = document.createElement("p");
    child1.innerHTML = ("You: "+a.value +" | Computer: "+ value);
    let dr = document.getElementById("d1");
    dr.appendChild(child1);

    if(a.value === "rock")
    {
        if(value === "rock")
        {
            ties += 1;
        }
        else if(value == "scissors")
        {
            u_score += 1;
        }
        else
        {
            c_score += 1;
        }

    }
    if(a.value === "paper")
    {
        if(value === "rock")
        {
            u_score += 1;
        }
        else if(value == "scissors")
        {
            c_score += 1;
        }
        else
        {
            ties += 1;
        }
    }
    if (a.value === "scissors")
    {
        if(value === "rock")
        {
            c_score += 1;
        }
        else if(value === "scissors")
        {
            ties += 1;
        }
        else
        {
            u_score += 1;
        }

    }

    let element = document.getElementById("score").children[0];
    let new_Node = document.createTextNode("Your score: " + u_score + " | Computer Score: " + c_score  + " | Ties: " + ties);
    element.replaceChild(new_Node,element.childNodes[0]);
}

function rps()
{
    let rand_num = Math.floor(Math.random()* (3) + 1);
    
    if(rand_num === 1) //rock
    {
        return "rock";
    }
    else if(rand_num === 2)  //paper
    {
        return "paper";
    }
    else if(rand_num === 3)  //scissors
    {
        return "scissors";
    }
}

var u_score = 0;
var c_score = 0;
var ties = 0;

var child = document.createElement("h2");
child.innerHTML = ("Your score: " + u_score + " | Computer Score: " + c_score + " | Ties: " + ties);
let cs = document.getElementById("score");
cs.appendChild(child);


