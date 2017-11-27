/**
 * Created by TommyJang on 11/26/17.
 */



function calculate() {


    var input = document.getElementById("rolloverincome").value;

    //alert(input);

    var monthlyBudget = 0;

    var month1 = document.getElementById("month").value;


    if(month1 == "january") {
        monthlyBudget = input/31
        alert(monthlyBudget);
    } else {
        monthlyBudget = input/30
        alert(monthlyBudget);
    }



}


function customCalculate() {

    var inputIncome2 = documet.getElementById('customeincome').value;
    var inputNecessities2 = documet.getElementById("customnecessities").value;
    var inputSavings2 = documet.getElementById("customnsavings").value;

    var spent = inputIncome2 - inputNecessities2;

    alert(spent);

}