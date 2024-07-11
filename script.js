const body = document.querySelector(".body");
const container = document.querySelector(".container");
const button = document.createElement("button")
const color = document.createElement("button")
button.textContent = ("addgrid");
color.textContent = ("colorgrid")
body.appendChild(button)
body.appendChild(color)

button.addEventListener('click',function(){
    let input = prompt("Enter a number for the grid");
    while(input >= 100){
        let input = prompt("Enter a number for the grid");
    }
    for (let i = 0; i < input * input; i++){
        const grid = document.createElement("div");
        grid.classList.add('grid');
        container.appendChild(grid);
        grid.addEventListener('mouseover',function(){
            grid.style.backgroundColor = 'black';
            
        })
        }
    
})
let colors = ['red','blue','green']
let x = colors[Math.floor(Math.random() * 3)];

color.addEventListener('click',function(){
    let input = prompt("Enter a number for the grid");
    while(input >= 100){
        let input = prompt("Enter a number for the grid");
    }
    for (let i = 0; i < input * input; i++){
        const grid = document.createElement("div");
        let colors = ['red','blue','green']
        let x = colors[Math.floor(Math.random() * 3)];
        grid.classList.add('grid');
        container.appendChild(grid);
        grid.addEventListener('mouseover',function(){
            grid.style.backgroundColor = x;
            
        })
        }
    
})







