function valueButton(e){
    calculatorForm.screen.value += e.value;
}
function Clear(){
    calculatorForm.screen.value = null;
}
function Calculate(){
    calculatorForm.screen.value = eval(calculatorForm.screen.value);
}
function Delete_func() {
    calculatorForm.screen.value = calculatorForm.screen.value.substr(0,calculatorForm.screen.value.length-1)
  }