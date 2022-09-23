for (i = 1; (i <= 16); i++) {
  const grid16 = document.createElement("div");
  grid16.textContent = i;
  const gridContainer = document.getElementById("gridContainer").appendChild(grid16);
  grid16.classList.add('gridItem')

  
grid16.addEventListener('mouseover', ()=>{
  grid16.style.backgroundColor = "red"
  console.log('gi')
})


}

// console.log(i);
// console.log('hi')
