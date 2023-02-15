//document.getElementById("picslot1").src="pics/Zhongli/zhongliicon.webp";


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

        if (day == 3 || day == 4)
        {
            document.getElementById("slot1").innerHTML += "<br></br>Farm the domain";
        }
        else
        {
            document.getElementById("slot1").innerHTML += "<br></br>Dont farm the domain";
        }
        
    break;

    case "Diluc":

        document.getElementById("picslot1").src="pics/Diluc/dilucicon.webp";
        document.getElementById("slot1").innerHTML += "<br></br>Diluc-san";
        document.getElementById("slot1").innerHTML += "<br></br>Pausechamp";

        if (day == 2 || day == 5 || day == 0)
        {
            document.getElementById("slot1").innerHTML += "<br></br>Farm the domain";
        }
        else
        {
            document.getElementById("slot1").innerHTML += "<br></br>Dont farm the domain";
        }
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
        document.getElementById("slot2").innerHTML += "<br></br>Zhongli";
        document.getElementById("picslot2").src="pics/Zhongli/zhongliicon.webp"; 

        if (day == 3 || day == 6 || day == 0)
        {
            document.getElementById("slot2").innerHTML += "<br></br>Farm the domain";
        }
        else
        {
            document.getElementById("slot2").innerHTML += "<br></br>Dont farm the domain";
        }
        
    break;

    case "Diluc":
        document.getElementById("slot2").innerHTML += "<br></br>Diluc";
        document.getElementById("picslot2").src="pics/Diluc/dilucicon.webp";
    }

}


function BuildSlot1()
{
    alert("Building " + document.getElementById("PickChar").value);
    var char = document.getElementById("PickChar").value;
    console.log(char);
    localStorage.setItem("1", char);
    location.reload()
    
    
}

function BuildSlot2()
{
    alert("Building " + document.getElementById("PickChar").value);
    var char = document.getElementById("PickChar").value;
    console.log(char);
    localStorage.setItem("2", char);
    location.reload()

    
    
}

function BuildSlot3()
{
    alert("Building " + document.getElementById("PickChar").value);
    var char = document.getElementById("PickChar").value;
    console.log(char);
    localStorage.setItem("3", char);

    
    
}


