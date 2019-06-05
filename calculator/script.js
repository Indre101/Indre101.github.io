const result = document.getElementById("result")
const values = document.querySelectorAll(".values");

values.forEach((e) => {
  e.addEventListener("click", dis)
})



function dis() {
  result.value += this.value
}

//function that evaluates the digit and return result 
function solve() {

  let x = result.value
  let y = eval(x)
  result.value = y

}

//function that clear the display 
function clr() {
  result.value = ""
}

// canvas

const canvas1 = document.getElementById("canvas_1");
const ctx = canvas1.getContext("2d");


canvas1.width = canvas1.scrollWidth
canvas1.height = canvas1.scrollHeight



// ctx.beginPath();

// ctx.moveTo(20, 30);
// ctx.lineTo(200, 200);
// ctx.stroke();
// canvas1.width = window.innerWidth
// canvas1.height = window.innerHeight


// function draw() {

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineStyle = ""
ctx.lineWidth = 2;
ctx.lineCap = "round";
ctx.moveTo(window.innerWidth, 30);
ctx.lineTo(200, 200);
ctx.lineTo(200, window.innerHeight);
ctx.stroke();

ctx.beginPath()
ctx.moveTo(200, 200);
ctx.lineTo(500, 250);
ctx.lineTo(300, 350)
ctx.lineTo(300, window.innerHeight);
ctx.stroke();

ctx.beginPath()
ctx.moveTo(300, 350);
ctx.lineTo(600, 450);
ctx.lineTo(400, 550);
ctx.lineTo(400, window.innerHeight);
ctx.stroke();

ctx.beginPath()
ctx.moveTo(400, 550);
ctx.lineTo(600, 600);
ctx.lineTo(500, 700);
ctx.lineTo(500, window.innerHeight);
ctx.stroke();


ctx.beginPath()
ctx.moveTo(500, 700);
ctx.lineTo(800, 700);
ctx.stroke();

// }



// window.addEventListener("resize", draw);