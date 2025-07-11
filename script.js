let tableRows = document.querySelectorAll('tr');
let tableCellValues = [];

function getTableCellValues() {
    for (let i = 0; i < tableRows.length; i++) {
        let tableCellValue = tableRows[i].children[0].innerHTML;
        tableCellValues.push(tableCellValue);
    }
}

function getAmountIngredients() {
    let portionsValue = parseInt(document.getElementById('portions_value').value);
    if (portionsValue > 20 || portionsValue < 1 || isNaN(portionsValue)) {
        document.getElementById('validate_portions').innerHTML = `<strong style="color: red">Bitte eine Zahl zwischen 1 und 20 eingeben.</strong> `;
        return;
    } else {
        document.getElementById('validate_portions').innerHTML = "";
        for (let i = 0; i < tableRows.length; i++) {
            let tableCell = tableRows[i].children[0];
            if (!tableCellValues[i]) {
                tableCell.innerHTML = "";
            }
            else {
                let updatedTableCellValue = (parseFloat(tableCellValues[i] * portionsValue) / 4);
                // console.log(updatedTableCellValue);
                if (updatedTableCellValue === 0.5) {
                    tableCell.innerHTML = "&frac12";
                } else if (updatedTableCellValue === 0.25) {
                    tableCell.innerHTML = "&frac14";
                } else if (updatedTableCellValue === 0.75) {
                    tableCell.innerHTML = "&frac34";
                }
                else if (updatedTableCellValue % 1 === 0.5) {
                    tableCell.innerHTML = `${updatedTableCellValue - 0.5} &frac12 `;
                } else if (updatedTableCellValue % 1 === 0.25) {
                    tableCell.innerHTML = `${updatedTableCellValue - 0.25} &frac14 `;
                } else if (updatedTableCellValue % 1 === 0.75) {
                    tableCell.innerHTML = `${updatedTableCellValue - 0.75} &frac34 `;
                }
                else {
                    tableCell.innerHTML = updatedTableCellValue;
                }
            }
        }
    }
}

getTableCellValues();

function toggleRespMenu () {
    document.getElementById('resp_menu').classList.toggle('resp_menu_closed');
    document.getElementById('resp_button').classList.toggle('active');
}

// KONTAKTSEITE ----------------------------------------------------------------------

//Arrow Function: window.onbeforeunload ist eine Funktion ohne Parameter () 
//die den Code innerhalb der Geschweitenklammern ausführt
window.onbeforeunload = () => {
    // läuft über alle Elemente in form
    
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

