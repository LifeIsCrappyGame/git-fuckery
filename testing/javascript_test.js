function generateItemSlot(slotNumber) {
    var item = localStorage.getItem(slotNumber);
    if (item === null) {
      console.log(`nothing in slot${slotNumber}`);
      return;
    }
  
    var date = new Date();
    var day = date.getDay();
  
    var icon = "";
    var name = "";
    var openDays = [];
  
    switch (item) {
      case "Zhongli":
        icon = "pics/Zhongli/zhongliicon.webp";
        name = "Zhongli";
        openDays = [3, 6, 0];
        break;
  
      case "Diluc":
        icon = "pics/Diluc/dilucicon.webp";
        name = "Diluc";
        openDays = [2, 5, 0];
        break;
  
      case "Sucrose":
        icon = "pics/Sucrose/sucroseicon.webp";
        name = "Sucrose";
        openDays = [1, 4, 0];
        break;
    }
  
    var picId = `picslot${slotNumber}`;
    var slotId = `slot${slotNumber}`;
  
    document.getElementById(picId).src = icon;
    document.getElementById(slotId).innerHTML += `<br><br>${name}`;
  
    if (openDays.includes(day)) {
      document.getElementById(slotId).innerHTML += `<br><mark>Domain OPEN</mark>`;
    } else {
      var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var openDaysOfWeek = openDays.map(d => daysOfWeek[d]);
      document.getElementById(slotId).innerHTML += `<br>Closed today - Opens on ${openDaysOfWeek.join(", ")}`;
    }
  }
  
  generateItemSlot(1);
  generateItemSlot(2);
  generateItemSlot(3);
  