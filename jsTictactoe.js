arrRow1 = arrRow2 = arrRow3 = [];
var evod=0;
function populate() {
  console.log("populate called");
  arrRow1 = [document.getElementById("1").value,document.getElementById("2").value,document.getElementById("3").value,];
  arrRow2 = [document.getElementById("4").value,document.getElementById("5").value, document.getElementById("6").value,];
  arrRow3 = [document.getElementById("7").value, document.getElementById("8").value, document.getElementById("9").value,];
}
function check(args) {
  evod++;
  console.log("EVOD = ",evod)
  if(evod%2==0){
    document.getElementById(args.id).value='o'
  }
  else{
    document.getElementById(args.id).value='x'
  }
  inputs=document.querySelectorAll('input');
  document.getElementById("result").innerHTML = "";
  console.log("check called");
  populate();
  console.log(arrRow1);
  console.log(arrRow2);
  console.log(arrRow3);
  if (
    (arrRow1[0] == arrRow1[1] && arrRow1[1] == arrRow1[2] && arrRow1[2] == "o") ||(arrRow2[0] == arrRow2[1] && arrRow2[1] == arrRow2[2] && arrRow2[2] == "o") ||(arrRow3[0] == arrRow3[1] && arrRow3[1] == arrRow3[2] && arrRow3[2] == "o") ||(arrRow1[0] == arrRow2[0] && arrRow2[0] == arrRow3[0] && arrRow3[0] == "o") ||(arrRow1[1] == arrRow2[1] && arrRow2[1] == arrRow3[1] && arrRow3[1] == "o") ||(arrRow1[2] == arrRow2[2] && arrRow2[2] == arrRow3[2] && arrRow3[2] == "o") ||(arrRow1[0] == arrRow2[1] &&arrRow2[1] == arrRow3[2] &&arrRow3[2] == "o") ||(arrRow1[2] == arrRow2[1] && arrRow2[1] == arrRow3[0] && arrRow3[0] == "o")){
    console.log("o won");
    document.getElementById("result").innerHTML = "Player O won";
    inputs.forEach(input => {input.disabled = true;});
  }
  else if (
    (arrRow1[0] == arrRow1[1] &&arrRow1[1] == arrRow1[2] &&arrRow1[2] == "x") ||(arrRow2[0] == arrRow2[1] && arrRow2[1] == arrRow2[2] && arrRow2[2] == "x") ||(arrRow3[0] == arrRow3[1] && arrRow3[1] == arrRow3[2] && arrRow3[2] == "x") ||(arrRow1[0] == arrRow2[0] && arrRow2[0] == arrRow3[0] && arrRow3[0] == "x") ||(arrRow1[1] == arrRow2[1] && arrRow2[1] == arrRow3[1] && arrRow3[1] == "x") ||(arrRow1[2] == arrRow2[2] && arrRow2[2] == arrRow3[2] && arrRow3[2] == "x") || (arrRow1[0] == arrRow2[1] && arrRow2[1] == arrRow3[2] && arrRow3[2] == "x") || (arrRow1[2] == arrRow2[1] && arrRow2[1] == arrRow3[0] && arrRow3[0] == "x")) {
    console.log("x won");
    document.getElementById("result").innerHTML = "Player x won";
    inputs.forEach(input => {input.disabled = true;});
  }
  else if(evod==9){
    document.getElementById("result").innerHTML = "Game drawn. Click on reset.";
    inputs.forEach(input => {input.disabled=true;});
  }
}
function reset(){
  inputs.forEach(input => {input.value = '';});
  document.getElementById("result").innerHTML = "";
  inputs.forEach(input => {input.disabled=false;});
  evod=0;
}
