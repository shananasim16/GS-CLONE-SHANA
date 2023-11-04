const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");

const currentActiveCellIdDisplay = document.getElementById("activeCellDisplay");
const boldButton = document.getElementById("boldBtn");
const italicButton = document.getElementById("italicBtn");
const underlineButton = document.getElementById("underlineBtn");
const textAlignButtons = document.getElementsByClassName("textAlignBtns");
const selectFFamily = document.getElementById("fontFamilySelect");
const selectFSize = document.getElementById("fontSizeSelect");

let currentActiveCell = null;
let activeCellOptionsState;


// let ActiveCellId = 'cell';
const rowNumber = 100; // initially there will be 100 rows;
// acsii code from A to Z



const fontFamArray = 
                    [
                        "Times New Roman", "Arial","Verdana","Courier New","Georgia", 
                        "Trebuchet MS","Comic Sans MS","Calibri", "Arial Narrow","Helvetica Neue",
                        "Tahoma","Lucida Sans","Palatino Linotype","Century Gothic", "Garamond",
                        "Bookman","Franklin Gothic Medium","Impact","Lucida Console","Monospace",
                        "Copperplate","Baskerville","Didot","Futura","Optima","Rockwell","Symbol",
                        "Webdings","Wingdings","Segoe UI","Consolas","Courier","Book Antiqua",
                        "Candara","Segoe Print","Arial Black"
                    ];
// const test = document.getElementById('A3');
// console.log(window.getComputedStyle(test).fontSize);



createGrid();
populateSelect();

function createGrid(){
    createGridHeader();
    for(let i=1; i<=rowNumber; i++){
        createGridBodyRow(i);
    }
}

function createGridHeader() {
  for (let i = 65; i <= 90; i++) {
    let currentChar = String.fromCharCode(i);
    const bold = document.createElement("b");
    bold.innerText = currentChar;
    tableHead.appendChild(bold);
  }
}

function createGridBodyRow(rowNumber) {
  const row = document.createElement("div");
  row.className = "tableRow";
  // each Row will contain 26 + 1(sr.no) cells
  for (let i = 64; i <= 90; i++) {
    if (i === 64) {
      //sr no cell
      const bold = document.createElement("b");
      bold.innerText = rowNumber;
      row.appendChild(bold);
    } else {
      const cell = document.createElement("div");
      cell.contentEditable = true;
      cell.id = `${String.fromCharCode(i)}${rowNumber}`;
      cell.addEventListener('focus', onCellFocus);
      row.appendChild(cell);
    }
  }
  tableBody.appendChild(row);
}

function onCellFocus(event) {
  if (currentActiveCell) {
    if (currentActiveCell.id === event.target.id) {
      // previously selected cell is equal to the currently selected cell.
      return;
    }
  }

  currentActiveCell = event.target;
  // console.log(currentActiveCell);
  currentActiveCellIdDisplay.innerText = event.target.id;
  // intialise the state of this cell.
  const computedStyleOfActiveCell = getComputedStyle(currentActiveCell);
  console.log(computedStyleOfActiveCell.fontFamily);
  activeCellOptionsState = {
    fontFamily: computedStyleOfActiveCell.fontFamily,
    fontSize: computedStyleOfActiveCell.fontSize,
    isBoldActive: computedStyleOfActiveCell.fontWeight === "600",
    isItalicActive: computedStyleOfActiveCell.fontStyle === "italic",
    isUnderlineActive:
      computedStyleOfActiveCell.textDecoration.includes("underline"),
    textAlign: computedStyleOfActiveCell.textAlign,
    textColor: computedStyleOfActiveCell.color,
    backgroundColor: computedStyleOfActiveCell.backgroundColor,
  };
  console.log(activeCellOptionsState);
  // for bold italic underline and text align buttons
  highlightOptionButtonsOnCellFocus();
  changeSelectFFamilyOptionDisplayed();
  changeSelectFSizeOptionDisplayed();
}
// 
function populateSelect(){
  for(let i=12; i<=64; i+=2){
      const option = document.createElement('option');
      option.value = i;
      option.innerText = i;
      selectFSize.appendChild(option);
      
  }
  
  for(let i=0; i<fontFamArray.length; i++){
      const option = document.createElement('option');
      option.value = fontFamArray[i];
      option.innerText = fontFamArray[i];
      selectFFamily.appendChild(option);
  }
  
}
