var directory = document.getElementById("directory");
var input = document.getElementById("input");
var outputserver = document.getElementById("outputserver");
var usermachine = document.getElementById("user-machine");
directory.innerHTML = "~";
document.getElementById("server").style.visibility = "visible";
//let person = prompt("linuxterminal user:", "");
//if (person == "mrpaulon") {
  //popuppsw()
//} else {
  //popupusr()
//};
document.getElementById("server").style.visibility = "visible";
function popupusr(){
    let person = prompt("linuxterminal user:", "");
    if (person == "mrpaulon") {
      popuppsw()
    } else {
      popupusr()
    }
};

function popuppsw(){
    let pswrd = prompt("password:", "");
    if (pswrd == "1M2R3P") {
      document.getElementById("server").style.visibility = "visible";
    } else {
      popupusr()
    }
};

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var cmd = input.value.split(" ");
    if(cmd[0] == "ls"){
      ls()
    }
    if(cmd[0] == "cd"){
      cd(cmd[1])
    }
    input.value = "";
  }
});

function ls(){
  if(directory.innerHTML == "~"){
    outputserver.innerHTML = ""+outputserver.innerHTML+"<p>"+ usermachine.innerHTML +"&ensp;ls <br/> home/ etc/</p>";
  }
  else if(directory.innerHTML == "home/"){
    outputserver.innerHTML = ""+outputserver.innerHTML+"<p>"+ usermachine.innerHTML +"&ensp;ls <br/> Bureau/ Images/ Documents/ Telechargements/</p>";
  }
  else if(directory.innerHTML == "Bureau/"){
    outputserver.innerHTML = ""+outputserver.innerHTML+"<p>"+ usermachine.innerHTML +"&ensp;ls <br/> Bureau/ Images/ Documents/ Telechargements/</p>";
  }
}

function cd(folder){
  if(directory.innerHTML == "~" && folder == "home/" || folder == "etc/"){
    outputserver.innerHTML = ""+outputserver.innerHTML+"<p>"+ usermachine.innerHTML +"&ensp;cd "+folder+"</p>";
    directory.innerHTML = ""+folder+""
  }
  else if(directory.innerHTML == "home/" && folder == "Bureau/" || folder == "Images/"){
    outputserver.innerHTML = ""+outputserver.innerHTML+"<p>"+ usermachine.innerHTML +"&ensp;cd "+folder+"</p>";
    directory.innerHTML = ""+folder+""
  }
  else {
    outputserver.innerHTML = ""+outputserver.innerHTML+"<p>Error no folder name "+folder+"</p>";
  }
}