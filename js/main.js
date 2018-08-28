// initial global variable
var global_chiffre_1_str = "";
var global_chiffre_2_str = "";
var global_operator_1_str = "";
var global_result = 0;
//var global_equal_flag = 0;

// press button number function
function button_number(button_element){

  // reinitialize data when button equal was pressed
  //if (global_equal_flag == 1) {
    //global_chiffre_1_str = "";
    //global_chiffre_2_str = "";
    //global_operator_1_str = "";
  //}
  var button_value_str = button_element.value;
  // determine chiffre_1 or chiffre_2
  if (! global_operator_1_str) {
    global_chiffre_1_str += button_value_str;
    document.getElementById('calculator_display').innerHTML = global_chiffre_1_str;
    //global_equal_flag = 0;
  }
  else {
    global_chiffre_2_str += button_value_str;
    document.getElementById('calculator_display').innerHTML = global_chiffre_2_str;


  }
}

// press button operator function
function button_operator(button_element){

  if (! global_operator_1_str) {
    var button_value_str = button_element.value;
    global_operator_1_str = button_value_str;
    document.getElementById('calculator_display').innerHTML = "";
  }
  else {
    calculate();
    global_operator_1_str = button_element.value;
  }
}

// press button equal function
function calculate(){
  // exit if user don't enter second number
  if (! global_chiffre_2_str) {
    return;
  }
  var local_chiffre_1_number = parseFloat(global_chiffre_1_str);
  var local_chiffre_2_number = parseFloat(global_chiffre_2_str);

  // determine operator
  if (global_operator_1_str == "+") {
    var result = local_chiffre_1_number + local_chiffre_2_number;
  }
  else if (global_operator_1_str == "*") {
    var result = local_chiffre_1_number * local_chiffre_2_number;
  }
  else if (global_operator_1_str == "/") {
    var result = local_chiffre_1_number / local_chiffre_2_number;
  }
  else {
    var result = local_chiffre_1_number - local_chiffre_2_number;
  }
  document.getElementById('calculator_display').innerHTML = result;
  global_chiffre_1_str = result.toString();
  global_chiffre_2_str = "";
}

function button_clear(button_element){
  global_chiffre_1_str = "";
  global_chiffre_2_str = "";
  global_operator_1_str = "";
  document.getElementById('calculator_display').innerHTML = "";
}

function button_equal(){
  if (! global_chiffre_1_str) {
    global_chiffre_1_str = "0";
  }
  calculate();
  //global_equal_flag = 1;
}
