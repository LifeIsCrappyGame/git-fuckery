

function buildSlot(slotNum) {
    var char = document.getElementById("PickChar").value;
    alert("Building " + char);
    localStorage.setItem(slotNum, char);
    location.reload();
    //$('#slot1').load('calculator.html');
    Change(inobj);
  }
  

  function deleteSlot(slotNum) {
    localStorage.removeItem(slotNum);
    location.reload();
  }
  

  for (var i = 1; i <= 3; i++) {
    var slot = document.getElementById("slot" + i);
    var picSlot = document.getElementById("picslot" + i);
    var charName = localStorage.getItem(i);
    var date = new Date();
    var day = date.getDay();
    if (charName) {
      switch (charName) {
        case "Zhongli":
          picSlot.src = "pics/Zhongli/zhongliicon.webp";
          slot.innerHTML += "<br></br>Zhongli";
          if (day == 3 || day == 6 || day == 0)
          {
            slot.innerHTML += "<br></br><mark>Domain OPEN</mark>";
          }
          else
          {
            slot.innerHTML += "<br></br>Closed today - Opens on Wednesday, Saturday, Sunday";
          }
          break;
        case "Diluc":
          picSlot.src = "pics/Diluc/dilucicon.webp";
          slot.innerHTML += "<br></br>Diluc";
          if (day == 2 || day == 5 || day == 0)
        {
            slot.innerHTML += "<br></br><mark>Domain OPEN</mark>";
        }
        else
        {
            slot.innerHTML += "<br></br>Closed today - Opens on Tuesday, Friday, Sunday";
        }
          break;
        case "Sucrose":
          picSlot.src = "pics/Sucrose/sucroseicon.webp";
          slot.innerHTML += "<br></br>Sucrose";
          if (day == 1 || day == 4 || day == 0)
        {
            slot.innerHTML += "<br></br><mark>Domain OPEN</mark>";
        }
        else
        {
            slot.innerHTML += "<br></br>Closed today - Opens on Monday, Thursday, Sunday";
        }

          break;
      }
    } else {
      console.log("nothing in slot" + i);
    }
  }
  




function AscendLevel1()
{
    let ModESCaption1 = document.getElementById('ESCaption1').valueAsNumber;
    let ModWDCaption = document.getElementById('WDCaption').valueAsNumber;
    let ModMDCaption1 = document.getElementById('MDCaption1').valueAsNumber;
    let ModXPCaption = document.getElementById('XPCaption').valueAsNumber;
    let ModMoraCaption = document.getElementById('MoraCaption').valueAsNumber;
    

    if(document.getElementById("1").checked == true)
    {
        /*console.log("first star works");
        console.log(ModESCaption1);
        ModESCaption1 = ModESCaption1 + 50;
        console.log(ModESCaption1);
        document.getElementById("ESCaption1").value = ModESCaption1; */

        ModWDCaption = ModWDCaption + 3;
        document.getElementById("WDCaption").value = ModWDCaption;
        ModMDCaption1 = ModMDCaption1 + 3;
        document.getElementById("MDCaption1").value = ModMDCaption1;
        ModXPCaption = ModXPCaption + 6;
        document.getElementById("XPCaption").value = ModXPCaption;
        ModMoraCaption = ModMoraCaption + 42710;
        document.getElementById("MoraCaption").value = ModMoraCaption;


        

    }
    else if (document.getElementById("1").checked === false)
    {
        /*console.log("shits fucked");
        console.log(ModESCaption1);
        ModESCaption1 = ModESCaption1 - 50;
        console.log(ModESCaption1);
        document.getElementById("ESCaption1").value = ModESCaption1;*/

        ModWDCaption = ModWDCaption - 3;
        document.getElementById("WDCaption").value = ModWDCaption;
        ModMDCaption1 = ModMDCaption1 - 3;
        document.getElementById("MDCaption1").value = ModMDCaption1;
        ModXPCaption = ModXPCaption - 6;
        document.getElementById("XPCaption").value = ModXPCaption;
        ModMoraCaption = ModMoraCaption - 42710;
        document.getElementById("MoraCaption").value = ModMoraCaption;

    }
}

function AscendLevel2()
{

    let ModESCaption1 = document.getElementById('ESCaption1').valueAsNumber;
    let ModBDCaption = document.getElementById('BDCaption').valueAsNumber;
    let ModWDCaption = document.getElementById('WDCaption').valueAsNumber;
    let ModMDCaption1 = document.getElementById('MDCaption1').valueAsNumber;
    let ModXPCaption = document.getElementById('XPCaption').valueAsNumber;
    let ModMoraCaption = document.getElementById('MoraCaption').valueAsNumber;


    if(document.getElementById("2").checked === true)
    {
        ModESCaption1 = ModESCaption1 + 3;
        document.getElementById("ESCaption1").value = ModESCaption1;        
        ModWDCaption = ModWDCaption + 10;
        document.getElementById("WDCaption").value = ModWDCaption;
        ModMDCaption1 = ModMDCaption1 + 15;
        document.getElementById("MDCaption1").value = ModMDCaption1;
        ModBDCaption = ModBDCaption + 2;
        document.getElementById("BDCaption").value = ModBDCaption;
        ModXPCaption = ModXPCaption + 31;
        document.getElementById("XPCaption").value = ModXPCaption;
        ModMoraCaption = ModMoraCaption + 161950;
        document.getElementById("MoraCaption").value = ModMoraCaption;

    }
    else
    {
        ModESCaption1 = ModESCaption1 - 3;
        document.getElementById("ESCaption1").value = ModESCaption1;        
        ModWDCaption = ModWDCaption - 10;
        document.getElementById("WDCaption").value = ModWDCaption;
        ModMDCaption1 = ModMDCaption1 - 15;
        document.getElementById("MDCaption1").value = ModMDCaption1;
        ModBDCaption = ModBDCaption - 2;
        document.getElementById("BDCaption").value = ModBDCaption;
        ModXPCaption = ModXPCaption - 31;
        document.getElementById("XPCaption").value = ModXPCaption;
        ModMoraCaption = ModMoraCaption - 161950;
        document.getElementById("MoraCaption").value = ModMoraCaption;
        

    }
}

function AscendLevel3()
{

    let ModESCaption1 = document.getElementById('ESCaption1').valueAsNumber;
    let ModBDCaption = document.getElementById('BDCaption').valueAsNumber;
    let ModWDCaption = document.getElementById('WDCaption').valueAsNumber;
    let ModMDCaption2 = document.getElementById('MDCaption2').valueAsNumber;
    let ModXPCaption = document.getElementById('XPCaption').valueAsNumber;
    let ModMoraCaption = document.getElementById('MoraCaption').valueAsNumber;


    if(document.getElementById("3").checked == true)
    {
        ModESCaption1 = ModESCaption1 + 6;
        document.getElementById("ESCaption1").value = ModESCaption1;        
        ModWDCaption = ModWDCaption + 20;
        document.getElementById("WDCaption").value = ModWDCaption;
        ModMDCaption2 = ModMDCaption2 + 12;
        document.getElementById("MDCaption2").value = ModMDCaption2;
        ModBDCaption = ModBDCaption + 4;
        document.getElementById("BDCaption").value = ModBDCaption;
        ModXPCaption = ModXPCaption + 31;
        document.getElementById("XPCaption").value = ModXPCaption;
        ModMoraCaption = ModMoraCaption + 180655;
        document.getElementById("MoraCaption").value = ModMoraCaption;
    }
    else
    {
        ModESCaption1 = ModESCaption1 - 6;
        document.getElementById("ESCaption1").value = ModESCaption1;        
        ModWDCaption = ModWDCaption - 20;
        document.getElementById("WDCaption").value = ModWDCaption;
        ModMDCaption2 = ModMDCaption2 - 12;
        document.getElementById("MDCaption2").value = ModMDCaption2;
        ModBDCaption = ModBDCaption - 4;
        document.getElementById("BDCaption").value = ModBDCaption;
        ModXPCaption = ModXPCaption - 31;
        document.getElementById("XPCaption").value = ModXPCaption;
        ModMoraCaption = ModMoraCaption - 180655;
        document.getElementById("MoraCaption").value = ModMoraCaption;
    }
}

function AscendLevel4()
{

    
    let ModESCaption2 = document.getElementById('ESCaption2').valueAsNumber;
    let ModBDCaption = document.getElementById('BDCaption').valueAsNumber;
    let ModWDCaption = document.getElementById('WDCaption').valueAsNumber; 
    let ModMDCaption2 = document.getElementById('MDCaption2').valueAsNumber;
    let ModXPCaption = document.getElementById('XPCaption').valueAsNumber;
    let ModMoraCaption = document.getElementById('MoraCaption').valueAsNumber;

    if(document.getElementById("4").checked == true)
    {
        ModESCaption2 = ModESCaption2 + 3;
        document.getElementById("ESCaption2").value = ModESCaption2;        
        ModWDCaption = ModWDCaption + 30;
        document.getElementById("WDCaption").value = ModWDCaption;
        ModMDCaption2 = ModMDCaption2 + 18;
        document.getElementById("MDCaption2").value = ModMDCaption2;
        ModBDCaption = ModBDCaption + 8;
        document.getElementById("BDCaption").value = ModBDCaption;
        ModXPCaption = ModXPCaption + 45;
        document.getElementById("XPCaption").value = ModXPCaption;
        ModMoraCaption = ModMoraCaption + 256905;
        document.getElementById("MoraCaption").value = ModMoraCaption;
    }
    else
    {
        ModESCaption2 = ModESCaption2 - 3;
        document.getElementById("ESCaption2").value = ModESCaption2;        
        ModWDCaption = ModWDCaption - 30;
        document.getElementById("WDCaption").value = ModWDCaption;
        ModMDCaption2 = ModMDCaption2 - 18;
        document.getElementById("MDCaption2").value = ModMDCaption2;
        ModBDCaption = ModBDCaption - 8;
        document.getElementById("BDCaption").value = ModBDCaption;
        ModXPCaption = ModXPCaption - 45;
        document.getElementById("XPCaption").value = ModXPCaption;
        ModMoraCaption = ModMoraCaption - 256905;
        document.getElementById("MoraCaption").value = ModMoraCaption;
    }
}

function AscendLevel5()
{

    
    let ModESCaption2 = document.getElementById('ESCaption2').valueAsNumber;
    let ModBDCaption = document.getElementById('BDCaption').valueAsNumber;
    let ModWDCaption = document.getElementById('WDCaption').valueAsNumber;
    let ModMDCaption3 = document.getElementById('MDCaption3').valueAsNumber;
    let ModXPCaption = document.getElementById('XPCaption').valueAsNumber;
    let ModMoraCaption = document.getElementById('MoraCaption').valueAsNumber;


    if(document.getElementById("5").checked == true)
    {
        ModESCaption2 = ModESCaption2 + 6;
        document.getElementById("ESCaption2").value = ModESCaption2;        
        ModWDCaption = ModWDCaption + 45;
        document.getElementById("WDCaption").value = ModWDCaption;
        ModMDCaption3 = ModMDCaption3 + 12;
        document.getElementById("MDCaption3").value = ModMDCaption3;
        ModBDCaption = ModBDCaption + 12;
        document.getElementById("BDCaption").value = ModBDCaption;
        ModXPCaption = ModXPCaption + 62;
        document.getElementById("XPCaption").value = ModXPCaption;
        ModMoraCaption = ModMoraCaption + 346645;
        document.getElementById("MoraCaption").value = ModMoraCaption;
    }
    else
    {
        ModESCaption2 = ModESCaption2 - 6;
        document.getElementById("ESCaption2").value = ModESCaption2;        
        ModWDCaption = ModWDCaption - 45;
        document.getElementById("WDCaption").value = ModWDCaption;
        ModMDCaption3 = ModMDCaption3 - 12;
        document.getElementById("MDCaption3").value = ModMDCaption3;
        ModBDCaption = ModBDCaption - 12;
        document.getElementById("BDCaption").value = ModBDCaption;
        ModXPCaption = ModXPCaption - 62;
        document.getElementById("XPCaption").value = ModXPCaption;
        ModMoraCaption = ModMoraCaption - 346645;
        document.getElementById("MoraCaption").value = ModMoraCaption;
    }
}

function AscendLevel6()
{

    
    let ModESCaption3 = document.getElementById('ESCaption3').valueAsNumber;
    let ModBDCaption = document.getElementById('BDCaption').valueAsNumber;
    let ModWDCaption = document.getElementById('WDCaption').valueAsNumber;
    let ModMDCaption3 = document.getElementById('MDCaption3').valueAsNumber;
    let ModXPCaption = document.getElementById('XPCaption').valueAsNumber;
    let ModMoraCaption = document.getElementById('MoraCaption').valueAsNumber;

    if(document.getElementById("6").checked == true)
    {
        ModESCaption3 = ModESCaption3 + 6;
        document.getElementById("ESCaption3").value = ModESCaption3;        
        ModWDCaption = ModWDCaption + 60;
        document.getElementById("WDCaption").value = ModWDCaption;
        ModMDCaption3 = ModMDCaption3 + 24;
        document.getElementById("MDCaption3").value = ModMDCaption3;
        ModBDCaption = ModBDCaption + 20;
        document.getElementById("BDCaption").value = ModBDCaption;
        ModXPCaption = ModXPCaption + 83;
        document.getElementById("XPCaption").value = ModXPCaption;
        ModMoraCaption = ModMoraCaption + 451375;
        document.getElementById("MoraCaption").value = ModMoraCaption;
    }
    else
    {
        ModESCaption3 = ModESCaption3 - 6;
        document.getElementById("ESCaption3").value = ModESCaption3;        
        ModWDCaption = ModWDCaption - 60;
        document.getElementById("WDCaption").value = ModWDCaption;
        ModMDCaption3 = ModMDCaption3 - 24;
        document.getElementById("MDCaption3").value = ModMDCaption3;
        ModBDCaption = ModBDCaption - 20;
        document.getElementById("BDCaption").value = ModBDCaption;
        ModXPCaption = ModXPCaption - 83;
        document.getElementById("XPCaption").value = ModXPCaption;
        ModMoraCaption = ModMoraCaption - 451375;
        document.getElementById("MoraCaption").value = ModMoraCaption;
    }
}












function Change(inobj)
{

    
    switch (inobj)
    {
        case "default":
        document.getElementById("ESplaceholder1").src="pics/placeholder.webp";
        document.getElementById("ESplaceholder2").src="pics/placeholder.webp";
        document.getElementById("ESplaceholder3").src="pics/placeholder.webp";
        document.getElementById("BDplaceholder").src="pics/placeholder.webp";
        document.getElementById("WDplaceholder").src="pics/placeholder.webp";
        document.getElementById("MDplaceholder1").src="pics/placeholder.webp";
        document.getElementById("MDplaceholder2").src="pics/placeholder.webp";
        document.getElementById("MDplaceholder3").src="pics/placeholder.webp";
        document.getElementById("XPplaceholder").src="pics/placeholder.webp";
        document.getElementById("Moraplaceholder").src="pics/placeholder.webp";
        break;
        case "Diluc":
        document.getElementById("ESplaceholder1").src="pics/Diluc/tier1pyro.webp";
        document.getElementById("ESplaceholder2").src="pics/Diluc/tier2pyro.webp";
        document.getElementById("ESplaceholder3").src="pics/Diluc/tier3pyro.webp";
        document.getElementById("BDplaceholder").src="pics/Diluc/pyroregisvine.webp";
        document.getElementById("WDplaceholder").src="pics/Diluc/grass.webp";
        document.getElementById("MDplaceholder1").src="pics/Diluc/tier1insignia.webp";
        document.getElementById("MDplaceholder2").src="pics/Diluc/tier2insignia.webp";
        document.getElementById("MDplaceholder3").src="pics/Diluc/tier3insignia.webp";
        document.getElementById("XPplaceholder").src="pics/XPbook.webp";
        document.getElementById("Moraplaceholder").src="pics/Mora.webp";
        console.log("we are in the correct Diluc case, POG");
        break;

        case "Sucrose":
        document.getElementById("ESplaceholder1").src="pics/Sucrose/tier1anemo.webp";
        document.getElementById("ESplaceholder2").src="pics/Sucrose/tier2anemo.webp";
        document.getElementById("ESplaceholder3").src="pics/Sucrose/tier3anemo.webp";
        document.getElementById("BDplaceholder").src="pics/Sucrose/hurricaneseed.webp";
        document.getElementById("WDplaceholder").src="pics/Sucrose/aster.webp";
        document.getElementById("MDplaceholder1").src="pics/Sucrose/tier1nectar.webp";
        document.getElementById("MDplaceholder2").src="pics/Sucrose/tier2nectar.webp";
        document.getElementById("MDplaceholder3").src="pics/Sucrose/tier3nectar.webp";
        document.getElementById("XPplaceholder").src="pics/XPbook.webp";
        document.getElementById("Moraplaceholder").src="pics/Mora.webp";

        break;
        case "Zhongli":
        document.getElementById("ESplaceholder1").src="pics/Zhongli/tier1geo.webp";
        document.getElementById("ESplaceholder2").src="pics/Zhongli/tier2geo.webp";
        document.getElementById("ESplaceholder3").src="pics/Zhongli/tier3geo.webp";
        document.getElementById("BDplaceholder").src="pics/Zhongli/basalt.webp";
        document.getElementById("WDplaceholder").src="pics/Zhongli/corlapis.webp";
        document.getElementById("MDplaceholder1").src="pics/Zhongli/tier1slime.webp";
        document.getElementById("MDplaceholder2").src="pics/Zhongli/tier2slime.webp";
        document.getElementById("MDplaceholder3").src="pics/Zhongli/tier3slime.webp";
        document.getElementById("XPplaceholder").src="pics/XPbook.webp";
        document.getElementById("Moraplaceholder").src="pics/Mora.webp";
        console.log("we are in the correct Zhongli case, POG");    

        break;
        /* case "Jean":
        document.getElementById("ESplaceholder1").src="pics/placeholder.webp";
        document.getElementById("ESplaceholder2").src="pics/placeholder.webp";
        document.getElementById("ESplaceholder3").src="pics/placeholder.webp";
        document.getElementById("BDplaceholder").src="pics/placeholder.webp";
        document.getElementById("WDplaceholder").src="pics/placeholder.webp";
        document.getElementById("MDplaceholder1").src="pics/placeholder.webp";
        document.getElementById("MDplaceholder2").src="pics/placeholder.webp";
        document.getElementById("MDplaceholder3").src="pics/placeholder.webp";
        document.getElementById("XPplaceholder").src="pics/placeholder.webp";
        document.getElementById("Moraplaceholder").src="pics/placeholder.webp";
 */
    }
}

