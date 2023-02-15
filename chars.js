const Ayato =
{
    name: "Kamisato Ayato",
    vision: "Hydro",
}
const Sucrose =
{
    name: "Sucrose",
    vision: "Anemo",
}

/*
window.localStorage.setItem('Ayato', JSON.stringify(Ayato));
window.localStorage.setItem('Sucrose', JSON.stringify(Sucrose));
*/

function getAyato()
{
    //alert(window.localStorage.getItem('Ayato'));
    /*
    let data1 = JSON.parse(window.localStorage.getItem('Ayato'));
    let data2 = JSON.parse(window.localStorage.getItem('Sucrose'));
    let len = localStorage.length;
    console.log(data1);
    console.log(data2);
    console.log(len);
    */

    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        console.log(key + " => " + value);
}
    
    
}



function SaveName()
{
    console.clear();
    var ModListOfChars = document.getElementById("ListOfChars");
    ModListOfChars.innerHTML = " ";
    var input = document.getElementById('name').value;
    localStorage.setItem(localStorage.length + 1, input);
    
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        console.log(key + " => " + value);
       
        
        ModListOfChars.innerHTML = ModListOfChars.innerHTML + value;      
    
}

}

function DeleteList()
{
window.localStorage.clear();
};

function ShowList()
{
    var ModListOfChars = document.getElementById("ListOfChars");
    ModListOfChars.innerHTML = " ";
    for(var i=0, len=localStorage.length; i<len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        console.log(key + " => " + value);
       
        ModListOfChars.innerHTML = ModListOfChars.innerHTML + value + ",\n";
        
    }
    
    console.log(localStorage.length);
    var pocet = localStorage.length;
    alert("You own the total of "+ pocet+ " characters.");
    
    
    
};