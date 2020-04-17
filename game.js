/*var colors = ["rgb(255, 255, 0)", 

"rgb(255, 0, 0)",
"rgb(255, 255, 255)",
"rgb(255, 0, 255)",
"rgb(0, 255, 255)",
"rgb(0, 255, 0)"

]
*/
var colors = genrateRandomColors(6);

var squares = document.querySelectorAll(".square");
var anmol = pickcolor();
var colordisp = document.getElementById("colordisp");
var messageDisp = document.querySelector ("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

var numsquares =0;
easybtn.addEventListener("click",function(){
hardbtn.classList.remove("selected");
easybtn.classList.add("selected");
numsquares = 3
colors = genrateRandomColors(numsquares);
anmol = pickcolor();
colordisp.textContent = anmol;
for(var i =0; i<  squares.length; i++){
    if(colors[i]){
        squares[i].style.background = colors[i];
    }

    else squares[i].style.display = "none";
}

});


hardbtn.addEventListener("click",function(){
    
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numsquares =6
    colors = genrateRandomColors(numsquares);
anmol = pickcolor();
colordisp.textContent = anmol;
for(var i =0; i<  squares.length; i++){
    
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
}
    





});


resetButton.addEventListener("click",function(){
//alert("reseted");
colors = genrateRandomColors(6);
anmol = pickcolor();
colordisp.textContent = anmol;
this.textContent ="New Colors";
messageDisp.textContent="";


for( var i = 0; i<squares.length;i++){

squares[i].style.background = colors[i];

}

h1.style.background = "steelblue";



})
colordisp.textContent = anmol;

for(var i =0; i <squares.length; i++){

squares[i].style.background = colors[i];
squares[i].addEventListener("click",function(){

    var Clickedcolor = this.style.background;
    if(Clickedcolor === anmol){
        messageDisp.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColor(Clickedcolor);
        h1.style.background = Clickedcolor;
    }

    else {
this.style.background = "#232323";
messageDisp.textContent ="Try Again"


}
});
}
function changeColor (color){

for( var i =0; i<squares.length; i++){
    squares[i].style.background = color;
}




}

function pickcolor(){

var random = Math.floor(Math.random()*colors.length);
return colors[random];



}

function genrateRandomColors(num){

var arr =[];

for( var i = 0; i< num; i++){

arr.push(randomcolor());

}
return arr;



}

function randomcolor(){


var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

return "rgb(" + r + ", " + g + ", " + b + ")";

}