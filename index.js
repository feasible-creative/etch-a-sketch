

for (i = 1; (i <= 200); i++) {
  const grid16 = document.createElement("div");
  grid16.textContent = i;
  grid16.style.width = "5%"
  grid16.style.height = "5rem"
  

  

  const gridContainer = document.getElementById("gridContainer").appendChild(grid16);
  grid16.classList.add('gridItem')

  
  
grid16.addEventListener('mouseover', ()=>{
  // grid16.style.backgroundColor = "black"
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  grid16.style.backgroundColor = "#" + randomColor;
  
  grid16.style.backgroundColor = "randomColor"



})



}


const button = document.querySelector('#squareCount')
button.addEventListener('click', () =>{
  answer = prompt('How many squares per side? (Max 100)')
  console.log(answer)
  if (answer > 100){
    alert("ERROR: Please select a value less than 100.")
  }


})

// console.log(i);
// console.log('hi')
