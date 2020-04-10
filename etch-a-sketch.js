function makeGrid(row,col){
    container.setAttribute("style","display: grid; " +
     `grid-template-columns: repeat(${col},1fr); ` 
     + `grid-template-rows: repeat(${[row]},1fr)`);
 
    for(let i=0; i<row*col;i++){
        const div = document.createElement('div');
        container.appendChild(div).className = "grid-item";
    }

    const grid = document.querySelectorAll('.grid-item');

    grid.forEach((gridItem) =>{
        gridItem.addEventListener('mouseenter', changeColor)
    });
}

function changeColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.background = '#' + randomColor;
}

function clearGrid(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    
    makeGrid(16,16)
}

makeGrid(16,16);

const clear = document.querySelector('#clear');
clear.addEventListener('click',clearGrid)
