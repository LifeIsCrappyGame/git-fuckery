
if (localStorage.getItem("1") === null)
{
    console.log("nothing in slot1");
}
else
{
    var date = new Date();
    var day = date.getDay();
    
    switch (localStorage.getItem("1"))
    {
    case "Zhongli":
        document.getElementById("picslot1").src="pics/Zhongli/zhongliicon.webp";
        document.getElementById("slot1").innerHTML += "<br></br>Zhongli"; 

        if (day == 3 || day == 6 || day == 0)
        {
            document.getElementById("slot1").innerHTML += "<br></br><mark>Domain OPEN</mark>";
        }
        else
        {
            document.getElementById("slot1").innerHTML += "<br></br>Closed today - Opens on Wednesday, Saturday, Sunday";
        }
        
    break;

    case "Diluc":

        document.getElementById("picslot1").src="pics/Diluc/dilucicon.webp";
        document.getElementById("slot1").innerHTML += "<br></br>Diluc"; 

        if (day == 2 || day == 5 || day == 0)
        {
            document.getElementById("slot1").innerHTML += "<br></br><mark>Domain OPEN</mark>";
        }
        else
        {
            document.getElementById("slot1").innerHTML += "<br></br>Closed today - Opens on Tuesday, Friday, Sunday";
        }

    break;

    case "Sucrose":

    document.getElementById("picslot1").src="pics/Sucrose/sucroseicon.webp";
    document.getElementById("slot1").innerHTML += "<br></br>Sucrose"; 

    if (day == 1 || day == 4 || day == 0)
        {
            document.getElementById("slot1").innerHTML += "<br></br><mark>Domain OPEN</mark>";
        }
        else
        {
            document.getElementById("slot1").innerHTML += "<br></br>Closed today - Opens on Monday, Thursday, Sunday";
        }

    break;


    }

}

if (localStorage.getItem("2") === null)
{
    console.log("nothing in slot2");
}
else
{
    var date = new Date();
    var day = date.getDay();
    
    switch (localStorage.getItem("2"))
    {
    case "Zhongli":
        document.getElementById("picslot2").src="pics/Zhongli/zhongliicon.webp";
        document.getElementById("slot2").innerHTML += "<br></br>Zhongli"; 

        if (day == 3 || day == 6 || day == 0)
        {
            document.getElementById("slot2").innerHTML += "<br></br><mark>Domain OPEN</mark>";
        }
        else
        {
            document.getElementById("slot2").innerHTML += "<br></br>Closed today - Opens on Wednesday, Saturday, Sunday";
        }
        
    break;

    case "Diluc":

        document.getElementById("picslot2").src="pics/Diluc/dilucicon.webp";
        document.getElementById("slot2").innerHTML += "<br></br>Diluc"; 

        if (day == 2 || day == 5 || day == 0)
        {
            document.getElementById("slot2").innerHTML += "<br></br><mark>Domain OPEN</mark>";
        }
        else
        {
            document.getElementById("slot2").innerHTML += "<br></br>Closed today - Opens on Tuesday, Friday, Sunday";
        }

    break;

    case "Sucrose":

    document.getElementById("picslot2").src="pics/Sucrose/sucroseicon.webp";
    document.getElementById("slot2").innerHTML += "<br></br>Sucrose"; 

    if (day == 1 || day == 4 || day == 0)
        {
            document.getElementById("slot2").innerHTML += "<br></br><mark>Domain OPEN</mark>";
        }
        else
        {
            document.getElementById("slot2").innerHTML += "<br></br>Closed today - Opens on Monday, Thursday, Sunday";
        }

    break;


    }

}

    if (localStorage.getItem("3") === null)
{
    console.log("nothing in slot1");
}
else
{
    var date = new Date();
    var day = date.getDay();
    
    switch (localStorage.getItem("3"))
    {
    case "Zhongli":
        document.getElementById("picslot3").src="pics/Zhongli/zhongliicon.webp";
        document.getElementById("slot3").innerHTML += "<br></br>Zhongli"; 

        if (day == 3 || day == 6 || day == 0)
        {
            document.getElementById("slot3").innerHTML += "<br></br><mark>Domain OPEN</mark>";
        }
        else
        {
            document.getElementById("slot3").innerHTML += "<br></br>Closed today - Opens on Wednesday, Saturday, Sunday";
        }
        
    break;

    case "Diluc":

        document.getElementById("picslot3").src="pics/Diluc/dilucicon.webp";
        document.getElementById("slot3").innerHTML += "<br></br>Diluc"; 

        if (day == 2 || day == 5 || day == 0)
        {
            document.getElementById("slot3").innerHTML += "<br></br><mark>Domain OPEN</mark>";
        }
        else
        {
            document.getElementById("slot3").innerHTML += "<br></br>Closed today - Opens on Tuesday, Friday, Sunday";
        }

    break;

    case "Sucrose":

    document.getElementById("picslot3").src="pics/Sucrose/sucroseicon.webp";
    document.getElementById("slot3").innerHTML += "<br></br>Sucrose"; 

    if (day == 1 || day == 4 || day == 0)
        {
            document.getElementById("slot3").innerHTML += "<br></br><mark>Domain OPEN</mark>";
        }
        else
        {
            document.getElementById("slot3").innerHTML += "<br></br>Closed today - Opens on Monday, Thursday, Sunday";
        }

    break;


    }
}

function BuildSlot1()
{
    alert("Building " + document.getElementById("PickChar").value);
    var char = document.getElementById("PickChar").value;
    console.log(char);
    localStorage.setItem("1", char);
    location.reload();
    
    
}

function BuildSlot2()
{
    alert("Building " + document.getElementById("PickChar").value);
    var char = document.getElementById("PickChar").value;
    console.log(char);
    localStorage.setItem("2", char);
    location.reload();

    
    
}

function BuildSlot3()
{
    alert("Building " + document.getElementById("PickChar").value);
    var char = document.getElementById("PickChar").value;
    console.log(char);
    localStorage.setItem("3", char);
    location.reload();

    
}

function DeleteSlot1()
{
window.localStorage.removeItem("1");
location.reload();
};

function DeleteSlot2()
{
window.localStorage.removeItem("2");
location.reload();
};

function DeleteSlot3()
{
window.localStorage.removeItem("3");
location.reload();
};


