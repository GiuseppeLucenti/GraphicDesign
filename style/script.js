var menu = "close";

function menumobile(){
  var menumobile = document.getElementsByTagName('menumobile');


  if (menu == "close") {
    mobilemenu.style.width = "100%";
    menu = "open";
  }
  else{
    mobilemenu.style.width = "0%";
    menu = "close";
  }
}