var list = [
  "div1",
  "div2",
  "div3",
  "div4",
  "div5",
  "div6",
  "div7",
  "div8",
  "div9",
];


var count = 1
var xwins = 0
var owins = 0


function select(input) {
  if (count % 2 === 0) {
    input.textContent = "O"
    input.className = "used2"
  } else {
    input.textContent = "X"
    input.className = "used1"
  }
  count += 1
  }
  
  

var onex = false;
var twox = false;
var threex = false;
var fourx = false;
var fivex = false;
var sixx = false;
var sevenx = false;
var eightx = false;
var ninex = false;

var oneo = false;
var twoo = false;
var threeo = false;
var fouro = false;
var fiveo = false;
var sixo = false;
var seveno = false;
var eighto = false;
var nineo = false;

var winnerx = false;
var winnero = false;

function checkWinnerx(id){
if (id.id == "div1" && id.textContent == "X"){
onex = true
}else if(id.id == "div2" && id.textContent == "X"){
twox = true
}else if (id.id == "div3" && id.textContent == "X"){
threex = true;
}else if (id.id == "div4" && id.textContent == "X"){
fourx = true;
}else if (id.id == "div5" && id.textContent == "X"){
fivex = true;
}else if (id.id == "div6" && id.textContent == "X"){
sixx = true;
}else if (id.id == "div7" && id.textContent == "X"){
sevenx = true;
}else if (id.id == "div8" && id.textContent == "X"){
eightx = true;
}else if (id.id == "div9" && id.textContent == "X"){
ninex = true;
}if (onex && twox && threex){
winnerx = true;
document.getElementById("div1").className ="winner";
document.getElementById("div2").className ="winner";
document.getElementById("div3").className ="winner";
xwins += 1
}else if(fourx && fivex && sixx){
winnerx = true
document.getElementById("div4").className ="winner";
document.getElementById("div5").className ="winner";
document.getElementById("div6").className ="winner";
xwins += 1
}else if(sevenx && eightx && ninex){
winnerx = true
document.getElementById("div7").className ="winner";
document.getElementById("div8").className ="winner";
document.getElementById("div9").className ="winner";
xwins += 1
}else if(onex && fourx && sevenx){
winnerx = true
document.getElementById("div1").className ="winner";
document.getElementById("div4").className ="winner";
document.getElementById("div7").className ="winner";
xwins += 1
}else if(twox && fivex && eightx){
winnerx = true
document.getElementById("div2").className ="winner";
document.getElementById("div5").className ="winner";
document.getElementById("div8").className ="winner";
xwins += 1
}else if(threex && sixx && ninex){
winnerx = true
document.getElementById("div3").className ="winner";
document.getElementById("div6").className ="winner";
document.getElementById("div9").className ="winner";
xwins += 1
}else if(onex && fivex && ninex){
winnerx = true
document.getElementById("div1").className ="winner";
document.getElementById("div5").className ="winner";
document.getElementById("div9").className ="winner";
xwins += 1
}else if(threex && fivex && sevenx){
winnerx = true
document.getElementById("div3").className ="winner";
document.getElementById("div5").className ="winner";
document.getElementById("div7").className ="winner";
xwins += 1
}
if (winnerx == true){
document.getElementById("div11").textContent = xwins
document.getElementById("winner").textContent +="X's"
}
}

function checkWinnero(id){
if (id.id == "div1" && id.textContent == "O"){
oneo = true
}else if(id.id == "div2" && id.textContent == "O"){
twoo = true
}else if (id.id == "div3" && id.textContent == "O"){
threeo = true;
}else if (id.id == "div4" && id.textContent == "O"){
fouro = true;
}else if (id.id == "div5" && id.textContent == "O"){
fiveo = true;
}else if (id.id == "div6" && id.textContent == "O"){
sixo = true;
}else if (id.id == "div7" && id.textContent == "O"){
seveno = true;
}else if (id.id == "div8" && id.textContent == "O"){
eighto = true;
}else if (id.id == "div9" && id.textContent == "O"){
nineo = true;
}if (oneo && twoo && threeo){
winnero = true
document.getElementById("div1").className ="winner";
document.getElementById("div2").className ="winner";
document.getElementById("div3").className ="winner";
owins += 1
}else if(fouro && fiveo && sixo){
winnero = true
document.getElementById("div4").className ="winner";
document.getElementById("div5").className ="winner";
document.getElementById("div6").className ="winner";
owins += 1
}else if(seveno && eighto && nineo){
winnero = true
document.getElementById("div7").className ="winner";
document.getElementById("div8").className ="winner";
document.getElementById("div9").className ="winner";
owins += 1
}else if(oneo && fouro && seveno){
winnero = true
document.getElementById("div1").className ="winner";
document.getElementById("div4").className ="winner";
document.getElementById("div7").className ="winner";
owins += 1
}else if(twoo && fiveo && eighto){
winnero = true
document.getElementById("div2").className ="winner";
document.getElementById("div5").className ="winner";
document.getElementById("div8").className ="winner";
owins += 1
}else if(threeo && sixo && nineo){
winnero = true
document.getElementById("div3").className ="winner";
document.getElementById("div6").className ="winner";
document.getElementById("div9").className ="winner";
owins += 1
}else if(oneo && fiveo && nineo){
winner = true
document.getElementById("div1").className ="winner";
document.getElementById("div5").className ="winner";
document.getElementById("div9").className ="winner";
owins += 1
}else if(threeo && fiveo && seveno){
winnero = true
document.getElementById("div3").className ="winner";
document.getElementById("div5").className ="winner";
document.getElementById("div7").className ="winner";
owins += 1
}
if (winnero == true){
document.getElementById("div12").textContent = owins
document.getElementById("winner").textContent +="O's"
}
}

function reset(){
 onex = false;
 twox = false;
 threex = false;
 fourx = false;
 fivex = false;
 sixx = false;
 sevenx = false;
 eightx = false;
 ninex = false;

 oneo = false;
 twoo = false;
 threeo = false;
 fouro = false;
 fiveo = false;
 sixo = false;
 seveno = false;
 eighto = false;
nineo = false;
winnero = false;
winnerx = false;
count=1;

document.getElementById("div1").className = "blank"
document.getElementById("div2").className = "blank"
document.getElementById("div3").className = "blank"
document.getElementById("div4").className = "blank"
document.getElementById("div5").className = "blank"
document.getElementById("div6").className = "blank"
document.getElementById("div7").className = "blank"
document.getElementById("div8").className = "blank"
document.getElementById("div9").className = "blank"
document.getElementById("div1").textContent = ""
document.getElementById("div2").textContent = ""
document.getElementById("div3").textContent = ""
document.getElementById("div4").textContent = ""
document.getElementById("div5").textContent = ""
document.getElementById("div6").textContent = ""
document.getElementById("div7").textContent = ""
document.getElementById("div8").textContent = ""
document.getElementById("div9").textContent = ""
document.getElementById("winner").textContent ="Winner: "
}

function checkForCatWin() {
  if (count == 10 && winnerx == false && winnero == false) {
    document.getElementById("winner").textContent = "Winner: The Cat!";
  }
}