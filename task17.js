function createTable(){
    let table=document.createElement("table");
    table.border="1";
    table.style.borderCollapse="Collapse";

    for(let i=1;i<=5;i++){
        let row=document.createElement("tr");

        for(let j=1;j<=5;j++){
            let cell=document.createElement("td");
            cell.innerText=i+"," +j;
            cell.style.padding="10px";

            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.getElementById("tableArea").appendChild(table);
}