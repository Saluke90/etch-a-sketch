const container = document.querySelector(".container");

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
    )}
};

gridMaker(64);

const squares = document.querySelectorAll(".row");

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    })
})