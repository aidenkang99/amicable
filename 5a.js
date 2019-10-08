var n1;
var n2;

function parse(){
    var nums = document.getElementById("twoNums").value;

    n1 = parseInt(nums);
    var space = nums.indexOf(' ');
    nums = nums.substring(space + 1);
    n2 = parseInt(nums);
}

function isFactor(num, testNum){
    if (num % testNum == 0)
        return true;
    else
        return false;
}

function showFactors(arr){
    for(i in arr){
        document.write(arr[i] + " ");
    }
    document.write("<br />")
}

function addFactors(arr){
    var sum = 0;
    for (i in arr){
        sum += arr[i];
    }
    return sum;
}

function getFactors(num){
    var factors = [];
    for (var i = 1; i < num; i++){
        if (isFactor(num, i)){
            factors.push(i);
        }
    }
    return factors;
}

function isAmicable(){
    parse();
    // getFactors() calls isFactor()
    var factors1 = getFactors(n1);
    var factors2 = getFactors(n2);
    var sum1 = addFactors(factors1);
    var sum2 = addFactors(factors2);
    document.write('<link rel="stylesheet" href="5aResult.css">');
    if (sum1 == n2 && sum2 == n1)
        document.write("<p id='firstComment'>" + "The numbers are amicable." + "</p>");
    else{
        document.write("<p id='firstComment'>" + "The numbers are not amicable." + "</p>");
    }
    document.write("<p id='comment'>" + "The factors for the first number are ");
    showFactors(factors1);
    document.write("<p id='comment'>" + "The factors for the second number are ");
    showFactors(factors2);    
}

/*
// Test Codes

isFactorTest();
showFactorsTest();
addFactorsTest();
getFactorsTest();

function showFactorsTest(){
    var test1 = [1, 2, 4, 8, 16];
    var test2 = [1, 3];
    var test3 = [1, 2, 3, 4, 6];
    var test4 = [1];
    showFactors(test1);
    showFactors(test2);
    showFactors(test3);
    showFactors(test4);
    // confirmed that all these tests work
}


function getFactorsTest(){
    var test1 = [1, 2, 4, 8, 16];
    var test2 = [1, 3];
    var test3 = [1, 2, 3, 4, 6];
    var test4 = [1];
    var test = true;
    var result1 = getFactors(32);
    var result2 = getFactors(9);
    var result3 = getFactors(12);
    var result4 = getFactors(1);
    for (i in result1){
        if (result1[i] != test1[i])
            test = false;
    }
    for (i in result2){
        if (result2[i] != test2[i])
            test = false;
    }
    for (i in result3){
        if (result3[i] != test3[i])
            test = false;
    }
    for (i in result4){
        if (result4[i] != test4[i])
            test = false;
    }
    if (test)
        alert("Passed getFactorsTest");
    else
        alert("Failed getFactorstest");
    // confirmed that all these tests work
}

function isFactorTest(){
    var test = false;
    if (isFactor(100, 50)){
        if (isFactor(80, 8)){
            if (! isFactor(7, 5)){
                if (! isFactor(8, 7)){
                    if (isFactor(121, 11)){
                        if (isFactor(144, 12))
                            test = true;
                    }
                }
            }
        }
    }
    if (test)
        alert("Passed isFactorTest");
    else
        alert("Failed isFactortest");
    // confirmed that all these tests work
}

function addFactorsTest(){
    var test = false;
    var test1 = [1, 2, 4, 8, 16];
    var test2 = [1, 3];
    var test3 = [1, 2, 3, 4, 6];
    var test4 = [1];
    if (addFactors(test1) == 31){
        if (addFactors(test2) == 4){
            if (addFactors(test3) == 16){
                if (addFactors(test4) == 1)
                    test = true;
            }
        }
    }
    if (test)
        alert("Passed addFactorsTest");
    else
        alert("Failed addFactorstest");
    // confirmed that all these tests work
}
*/