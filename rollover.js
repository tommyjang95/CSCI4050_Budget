/**
 * Created by TommyJang on 11/26/17.
 */

var input = document.getElementById("rolloverincome").value;
var month1 = document.getElementById("month").value;
var nextDay = document.getElementById('day1roll').value
var monthlyBudget = input/31
var calculatedBudget = Math.floor(monthlyBudget* 100) / 100

function calculate() {

    //Initializes user input

    var input = document.getElementById("rolloverincome").value;
    var month1 = document.getElementById("month").value;
    var nextDay = document.getElementById('day1roll').value

    var monthlyBudget = 0;


    //Divides the total month budget(user input) into individual budgets according what month(user input)
    if(month1 == "january" || month1 == "January") {
        monthlyBudget = input/31
        var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
        document.getElementById('test').innerHTML = calculatedBudget;
    } else if (month1 == ("february") || month1 == "February") {
        monthlyBudget = input/28
        var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
        alert(calculatedBudget);
        document.getElementById('test').innerHTML = calculatedBudget
    } else if (month1 == ("march") || month1 == "March") {
        monthlyBudget = input/31
        var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
        alert(calculatedBudget);
    } else if (month1 == ("april") || month1 == "April") {
        monthlyBudget = input/30
        var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
        alert(calculatedBudget);
    } else if (month1 == ("may") || month1 == "May") {
        monthlyBudget = input/31
        var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
        alert(calculatedBudget);
    } else if (month1 == ("june") || month1 == "June") {
        monthlyBudget = input/30
        var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
        alert(calculatedBudget);
    } else if (month1 == ("july") || month1 == "July") {
        monthlyBudget = input/31
        var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
        alert(calculatedBudget);
    } else if (month1 == ("august") || month1 == "August") {
        monthlyBudget = input/31
        var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
        alert(calculatedBudget);
    } else if (month1 == ("september") || month1 == "September") {
        monthlyBudget = input/30
        var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
        alert(calculatedBudget);
    } else if (month1 == ("october") || month1 == "October") {
        monthlyBudget = input/31
        var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
        alert(calculatedBudget);
    } else if (month1 == ("november") || month1 == "November") {
        monthlyBudget = input/30
        var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
        document.getElementById('test').innerHTML = calculatedBudget;
    } else if (month1 == ("december") || month1 == "December") {
        monthlyBudget = input/31
        var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
        alert(calculatedBudget);
    }
    else {
        alert("Please enter the month correctly");
    }

}

function realRollover() {
    var input = document.getElementById("rolloverincome").value; // total monthly budget
    var monthlyBudget = input/30;
    var dailyBudget = Math.floor(monthlyBudget* 100) / 100;

    var availableDay = new Array(30);
    var spentDay = new Array(30);
    var addDay = new Array(30);
    var total = new Array(30);
    
    availableDay[0] = 10
    for(i = 0; i < 30; i++) {
        k = i+1;
        var dayBudget = 10;
        var dayname = "day" + k + "roll";
        var spent = document.getElementById(dayname).value; // how much spent
        spentDay[i] = spent;
        addDay[i] = availableDay[i] - spentDay[i];
        total[i] = dayBudget + addDay[i];
        alert[total[i]];
        j = i+2;
        var name = "test" + j;
        document.getElementById(name).innerHTML = total[i]; //prints
        availableDay[i+1] = total[i];
    }

}


//day 2
function rollover() {
    var input = document.getElementById("rolloverincome").value;
    var monthlyBudget = input/30
    var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
    var budget1 = document.getElementById('day1roll').value //2
    var day2 = calculatedBudget - budget1; //8
    var newBudget = calculatedBudget + day2 //18

    document.getElementById('test2').innerHTML = newBudget;

}
//day 3
function rollover2() {
    var input = document.getElementById("rolloverincome").value;
    var monthlyBudget = input/30
    var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
    var budget1 = document.getElementById('day1roll').value //2
    var budget2 = document.getElementById('day2roll').value //3
    var day3 = calculatedBudget - budget1 - budget2; //
    var newBudget = calculatedBudget  + calculatedBudget + day3

    document.getElementById('test3').innerHTML = newBudget;

}

function rollover3() {
    var input = document.getElementById("rolloverincome").value;
    var monthlyBudget = input/30
    var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
    var budget1 = document.getElementById('day1roll').value
    var budget2 = document.getElementById('day2roll').value
    var budget3 = document.getElementById('day3roll').value
    var day4 = calculatedBudget - budget1 - budget2 - budget3;
    var newBudget = calculatedBudget + calculatedBudget + calculatedBudget + day4

    document.getElementById('test4').innerHTML = newBudget;

}

function rollover4() {
    var input = document.getElementById("rolloverincome").value;
    var monthlyBudget = input/30
    var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
    var budget1 = document.getElementById('day1roll').value
    var budget2 = document.getElementById('day2roll').value
    var budget3 = document.getElementById('day3roll').value
    var budget4 = document.getElementById('day4roll').value
    var day5 = calculatedBudget - budget1 - budget2 - budget3 - budget4;
    var newBudget = calculatedBudget * 4 + day5

    document.getElementById('test5').innerHTML = newBudget;

}

function rollover5() {
    var input = document.getElementById("rolloverincome").value;
    var monthlyBudget = input/30
    var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
    var budget1 = document.getElementById('day1roll').value
    var budget2 = document.getElementById('day2roll').value
    var budget3 = document.getElementById('day3roll').value
    var budget4 = document.getElementById('day4roll').value
    var budget5 = document.getElementById('day5roll').value
    var day6 = calculatedBudget - budget1 - budget2 - budget3 - budget4 - budget5;
    var newBudget = calculatedBudget * 5 + day6

    document.getElementById('test6').innerHTML = newBudget;

}

function rollover6() {
    var input = document.getElementById("rolloverincome").value;
    var monthlyBudget = input/30
    var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
    var budget1 = document.getElementById('day1roll').value
    var budget2 = document.getElementById('day2roll').value
    var budget3 = document.getElementById('day3roll').value
    var budget4 = document.getElementById('day4roll').value
    var budget5 = document.getElementById('day5roll').value
    var budget6 = document.getElementById('day6roll').value
    var day7 = calculatedBudget - budget1 - budget2 - budget3 - budget4 - budget5 - budget6;
    var newBudget = calculatedBudget * 6 + day7

    document.getElementById('test7').innerHTML = newBudget;

}

function rollover7() {
    var input = document.getElementById("rolloverincome").value;
    var monthlyBudget = input/30
    var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
    var budget1 = document.getElementById('day1roll').value
    var budget2 = document.getElementById('day2roll').value
    var budget3 = document.getElementById('day3roll').value
    var budget4 = document.getElementById('day4roll').value
    var budget5 = document.getElementById('day5roll').value
    var budget6 = document.getElementById('day6roll').value
    var budget7 = document.getElementById('day7roll').value
    var day8 = calculatedBudget - budget1 - budget2 - budget3 - budget4 - budget5 - budget6 - budget7;
    var newBudget = calculatedBudget * 7 + day8

    document.getElementById('test8').innerHTML = newBudget;

}

function rollover8() {
    var input = document.getElementById("rolloverincome").value;
    var monthlyBudget = input/30
    var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
    var budget1 = document.getElementById('day1roll').value
    var budget2 = document.getElementById('day2roll').value
    var budget3 = document.getElementById('day3roll').value
    var budget4 = document.getElementById('day4roll').value
    var budget5 = document.getElementById('day5roll').value
    var budget6 = document.getElementById('day6roll').value
    var budget7 = document.getElementById('day7roll').value
    var budget8 = document.getElementById('day8roll').value
    var day9 = calculatedBudget - budget1 - budget2 - budget3 - budget4 - budget5 - budget6 - budget7 - budget8;
    var newBudget = calculatedBudget * 8 + day9

    document.getElementById('test9').innerHTML = newBudget;

}

function rollover9() {
    var input = document.getElementById("rolloverincome").value;
    var monthlyBudget = input/30
    var calculatedBudget = Math.floor(monthlyBudget* 100) / 100
    var budget1 = document.getElementById('day1roll').value
    var budget2 = document.getElementById('day2roll').value
    var budget3 = document.getElementById('day3roll').value
    var budget4 = document.getElementById('day4roll').value
    var budget5 = document.getElementById('day5roll').value
    var budget6 = document.getElementById('day6roll').value
    var budget7 = document.getElementById('day7roll').value
    var budget8 = document.getElementById('day8roll').value
    var budget9 = document.getElementById('day9roll').value
    var day10 = calculatedBudget - budget1 - budget2 - budget3 - budget4 - budget5 - budget6 - budget7 - budget8 - budget9;
    var newBudget = calculatedBudget * 9 + day10

    document.getElementById('test10').innerHTML = newBudget;

}


function customCalculate() {

    //Initializes user input
    var inputIncome2 = document.getElementById("customincome").value;
    var inputNecessities2 = document.getElementById("customnecessities").value;
    var inputSavings2 = document.getElementById("customsavings").value;
    var select = document.getElementById("chooseBudget").value


    //Calculate the total amount spent
    var totalSpent = inputIncome2 - inputNecessities2 - inputSavings2;


    //Calculates what can be spent based on selection of monthly or yearly (user input)
    //Make sure to change budget choosing user input as drag down
    if (select == "monthly" || select == "Monthly") {
        //Calculates monthly budget
        var monthlyBudget = totalSpent / 12
        var calculatedBudget2 = Math.floor(monthlyBudget* 100) / 100
        alert(calculatedBudget2);
    } else if (select == "yearly" || select == "Yearly") {
        //Calculates yearly budget
        var yearlyBudget = totalSpent
        var calculatedBudget2 = Math.floor(yearlyBudget*100) / 100;
        alert(calculatedBudget2);
    } else {
        alert("Please enter monthly or yearly")
    }






}
