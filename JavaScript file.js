/* Benny Shepherd
 * JavaScript 11-20
 * 11/8/19
 */



function firstLast6(arr) {
    var first = arr.shift();
    var last = arr.pop();
    if(first == 6 || last == 6) {
        return true;
    } else {
        return false;
    }
}


function has23(arr) {
    if (arr.includes(3) || arr.includes(2)) {
        return true;
    } else {
        return false;
    }
}

function fix23(arr) {
    if (arr[0] == 2 && arr[1] == 3) {
        arr[1] = 0;
    }
    if (arr[1] == 2 && arr[2] == 3) {
        arr[2] = 0;
    }
    return arr;
}


function countYZ(string) {
    string = string.toLowerCase();
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] == " " && string[i - 1] == "y") {
            count += 1;
        }
        if (string[i] == " " && string[ i - 1] == "z") {
            count += 1;
        }
    }
    if (string.endsWith("y") == true || string.endsWith("z") == true) {
        count += 1;
    }
    return count;
}

function endOther (string1, string2) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    if(string1.endsWith(string2) == true || string2.endsWith(string1) == true) {
        return true;
    } else {
        return false;
    }
}

function starOut (string) {
    var newWord = "";
    for(var i = 0; i < string.length; i++) {
        if(string[i] != "*" && string[i - 1] != "*" && string [i + 1] != "*") {
            newWord = newWord + string[i];
        }
    }
    return newWord;
}

function getSandwich (string) {
    var newWord = "";
    if (string.indexOf("bread") == string.lastIndexOf("bread")) {
        return newWord;
    }
    var index1 = string.indexOf("bread") + 5;
    var index2 = string.lastIndexOf("bread");
    newWord = string.substring(index1, index2);
    return newWord;
}

function canBalance (arr) {
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < arr.length; i++) {
        sum1 += arr[i];
        for(var j = i + 1; j < arr.length; j ++) {
            sum2 += arr[j];
        }
        if(sum1 == sum2) {
            return true;
        }
        sum2 = 0;
    }
    return false;
}

function countClumps (arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i + 1] && arr[i - 1] != arr[i]) {
            count += 1;
        }
    }
    return count;
}

function evenlySpaced (a, b, c) {
    var differenceAB = Math.abs(b - a);
    var differenceBC = Math.abs(c - b);
    var differenceAC = Math.abs(c - a);
    if (differenceAB == differenceBC) {
        return true;
    }
    if (a != b && differenceBC == differenceAC) {
        return true;
    }
    if (b != c && differenceAC == differenceAB) {
        return true;
    }
    return false;
}