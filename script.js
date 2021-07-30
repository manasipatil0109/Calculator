var flag=-1;
function valueButton(e,num)
{
    if(flag==-1 && (num==0 || num==2))
       calculatorForm.screen.value += e.value;
    else if((flag==0) || ((flag==1 || flag==2) && (num==0)))
       calculatorForm.screen.value += e.value;
    else
    {
        alert("Please Enter valid symbol and number");
    }
    flag=num;
}
function Clear(){
    calculatorForm.screen.value = null;
}
function Calculate(){
    if(calculatorForm.screen.value=="")
    {
        alert("Please enter the values");
    }
    else{
    calculatorForm.screen.value = eval(calculatorForm.screen.value);
    }
}
function Delete_func() {
    calculatorForm.screen.value = calculatorForm.screen.value.substr(0,calculatorForm.screen.value.length-1)
  }