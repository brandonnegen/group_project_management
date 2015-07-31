

var empName = function(){
    var first = ["Jerry", "Gerry", "Gary", "Geralyn", "Leif", "Hunter", "Josephine", "Angelica","Maria", "Bob", "Henry", "Baby", "Phoebe", "Chewie", "Ford"];
    var last = ["Anderson", "Chevrolet", "Buchanan", "", "Aster", "Downey", "Grunt", "Winston", "Michigan", "Posey", "Deary"];

    var num1 = Math.floor(Math.random() * first.length);
    var num2 = Math.floor(Math.random() * last.length);
    return first[num1] + " " + last[num2];
}

module.exports = empName;