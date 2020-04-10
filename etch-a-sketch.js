function makeGrid(){
    container.setAttribute("style","display: grid; " +
     "grid-template-columns: repeat(20,1fr); " 
     + "grid-template-rows: repeat(20,1fr)");
 
    for(let i=0; i<20*20;i++){
        const div = document.createElement('div');
        container.appendChild(div).className = "grid-item";
    }
}

function changeColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.background = '#' + randomColor;
}

function clearGrid(){
}
makeGrid();

const grid = document.querySelectorAll('.grid-item');

grid.forEach((gridItem) =>{
    gridItem.addEventListener('mouseenter', changeColor)
});

const clear = document.querySelector('#clear');

clear.addEventListener('click',clearGrid)
