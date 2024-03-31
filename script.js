const body = document.querySelector(".body");
const container = document.querySelector(".container");
const button = document.createElement("button")
button.textContent = ("addgrid");
body.appendChild(button)
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








