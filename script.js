let display = document.getElementById('display');
let currentInput = '';
let resetNext = false;

function appendNumber(number) {
  if (display.textContent === '0' || resetNext) {
    display.textContent = number;
    resetNext = false;
  } else {
    display.textContent += number;
  }
  currentInput = display.textContent;
}

function appendOperator(operator) {
  if (!isNaN(display.textContent.slice(-1))) {
    display.textContent += operator;
    resetNext = false;
  }
}

function clearDisplay() {
  display.textContent = '0';
  currentInput = '';
}

function calculateResult() {
  try {
    let result = eval(display.textContent);
    display.textContent = result;
    resetNext = true;
  } catch {
    display.textContent = 'Error';
    resetNext = true;
  }
}
function deleteLast() {
  if (resetNext) return; // Prevent backspacing after result
  let current = display.textContent;
  if (current.length > 1) {
    display.textContent = current.slice(0, -1);
  } else {
    display.textContent = '0';
  }
}

