function createTable() {
    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");

    if (rn === null || cn === null) {
        return;
    }

    const rows = Number(rn);
    const columns = Number(cn);

    if (isNaN(rows) || isNaN(columns)) {
        return;
    }

    if (rows <= 0 || columns <= 0) {
        alert("Rows and columns must be greater than 0");
        return;
    }

    const table = document.getElementById("myTable");

    table.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < columns; j++) {
            const cell = document.createElement("td");

            cell.textContent = `Row-${i} Column-${j}`;

            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}    
  

