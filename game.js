//const div = document.createElement('div');
const container = document.getElementsByClassName("container");
const buttons = document.getElementById("buttons");

const blackButton = document.createElement("button");
blackButton.innerText="BLACK";
blackButton.classList.add("blackButton");
blackButton.addEventListener('click', function (e) {
  drawBlack();
})
buttons.appendChild(blackButton);

const eraseButton = document.createElement("button");
eraseButton.innerText="ERASE";
eraseButton.classList.add("eraseButton");
eraseButton.addEventListener('click', function (e) {
  erase();
})
buttons.appendChild(eraseButton);

const randomColorButton = document.createElement("button");
randomColorButton.innerText="COLOR";
randomColorButton.classList.add("colorButton");
randomColorButton.addEventListener('click', function (e) {
  randomColor();
})
buttons.appendChild(randomColorButton);



for (let i=0; i<=255; i++){ //Creates 16 by 16 boxes

div = document.createElement('div');
div.classList.add("grid-item");


container[0].appendChild(div);


}

const allDivs = document.getElementsByClassName("grid-item");
//console.log(allDivs)

function drawBlack() {
 
  for (let i=0; i<=255; i++){ //Draws Black

    allDivs[i].addEventListener('mouseover', function (e) {
      //console.log(i)
      allDivs[i].style.backgroundColor = `rgb(10, 20, 20)`;
    });


  }
}


function erase(){
 
  for (let i=0; i<=255; i++){ //fills with white when mouseover

    allDivs[i].addEventListener('mouseover', function (e) {
      //console.log(i)
      allDivs[i].style.backgroundColor = `rgb(255, 255, 255)`;
    });


  }

}

function randomColor(){

  for (let i=0; i<=255; i++){ //fills with white when clicked 

    allDivs[i].addEventListener('mouseover', function (e) {
      //console.log(i)
      allDivs[i].style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    });


  }


}


function randomNum(){
  let x = Math.floor(Math.random() * 256);
  return x;
}