const container = document.querySelector(".container");

const button = document.querySelector("button");

button.addEventListener("click", () => {
    const cols = document.querySelectorAll(".col");
    cols.forEach((col) => {
        col.remove();
    });
    
    let size = prompt("New grid size:");
    
    if (+size > 64) {
        alert("Maximum size is 64");
        size = prompt("New grid size:");
    }

    gridMaker(+size);
})

function gridMaker(num) {
    for (let i = 0; i < num; i++) {
        let col = document.createElement("div");
        container.appendChild(col);
        col.classList.add("col");
    };

    const columns = document.querySelectorAll(".col");

    for (let j = 0; j < num; j++) {
        columns.forEach((column) => {
            let row = document.createElement("div");
            column.appendChild(row);
            row.classList.add('row');
        }
    )};

    const squares = document.querySelectorAll(".row");

    squares.forEach((square) => {
        square.style.backgroundColor = "white";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
    })
})
};

gridMaker(16);
