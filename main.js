
document.addEventListener("DOMContentLoaded", function (event) {

    let myArray = ["2","3","4"];

    //let val = document.getElementById("output1").value;

    document.getElementById("Square").addEventListener("click", function () {
        let x = myArray.map(f1);
        //let x = myArray.map(x => x.length);

        document.getElementById("output1").value = x[0];
        document.getElementById("output2").value = x[1];
        document.getElementById("output3").value = x[2];
    });
    
    document.getElementById("Cube").addEventListener("click", function () {
        let x = myArray.map(f2);
        
        document.getElementById("output1").value = x[0];
        document.getElementById("output2").value = x[1];
        document.getElementById("output3").value = x[2];
    });
    
    document.getElementById("ToTheFourth").addEventListener("click", function () {
        let x = myArray.map(f3)

        document.getElementById("output1").value = x[0];
        document.getElementById("output2").value = x[1];
        document.getElementById("output3").value = x[2];
    });
});


function f1(oneItem) {
    return oneItem * oneItem;
}

var f2 = function (oneItem) {
    return oneItem * oneItem * oneItem;
};

// function f2(oneItem) {
//     return oneItem * oneItem * oneItem;;
// } 

var f3 = new Function("oneItem", "return oneItem * oneItem * oneItem * oneItem");

// function f3(oneItem) {
//     return oneItem * oneItem * oneItem * oneItem;;
// } 




// function myLength(oneItem) {
//     return oneItem.length;
// }

// function myCaps(oneItem) {
//     return oneItem.toUpperCase();
// }

// function firstLetterFunction(oneItem) {
//     charArray = Array.from(oneItem)
//     return charArray[0];
// }