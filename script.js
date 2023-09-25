// DELETE
function del() {
  var output = document.getElementById("output").value;
  document.getElementById("output").value = output.substr(0, output.length - 1);
}

// CALCULATE
function calculate(expression) {
  try {
    var result = eval(expression);
    document.calculator.text.value = result;
  } catch (error) {
    document.calculator.text.value = 'Błąd';
  }
}