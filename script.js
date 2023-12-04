const output = document.querySelector('.output');

function del() {
  var outputValue = output.value;
  output.value = outputValue.substr(0, outputValue.length - 1);
}

function calculate(expression) {
  try {
    var result = eval(expression);
    output.value = result;
  } catch (error) {
    output.value = 'Error';
  }
}
