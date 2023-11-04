

function changeSelectFFamilyOptionDisplayed() {
  if (currentActiveCell) {
    let cellFFamily = activeCellOptionsState.fontFamily;
    
    for (let i = 0; i < selectFFamily.options.length; i++) {
      let opt = selectFFamily.options[i];
      let val = `"` + opt.value + `"`;
      if (val === cellFFamily) {
        opt.selected = true;
        break;
      }
    }

  }

}

function changeSelectFSizeOptionDisplayed() {
  if (currentActiveCell) {
    let cellFSize = activeCellOptionsState.fontSize;
    for(let i=0; i<selectFSize.options.length; i++){
      let opt =  selectFSize.options[i];
      let val =  selectFSize.options[i].value + 'px';
      if (val === cellFSize) {
        opt.selected = true;
      }
    }
  }
}

function highlightOptionButtonsOnCellFocus() {
  // highlight options on cell focus based on active cell state
  toggleBtnStyleCondition(boldButton, activeCellOptionsState.isBoldActive);
  toggleBtnStyleCondition(italicButton, activeCellOptionsState.isItalicActive);
  toggleBtnStyleCondition(
    underlineButton,
    activeCellOptionsState.isUnderlineActive
  );

  highlightTextAlignButtons(activeCellOptionsState.textAlign);
}

function toggleBtnStyleCondition(btnRef, isActive) {
  if (isActive) {
    btnRef.classList.add("optionActive");
  } else {
    btnRef.classList.remove("optionActive");
  }
}

function highlightTextAlignButtons(selectedAlignment) {
  // let alignValue = textAlignButtonRef.getAttribute('data-value');
  for (let i = 0; i < textAlignButtons.length; i++) {
    if (textAlignButtons[i].getAttribute("data-value") === selectedAlignment) {
      textAlignButtons[i].classList.add("optionActive");
    } else {
      textAlignButtons[i].classList.remove("optionActive");
    }
  }
}
