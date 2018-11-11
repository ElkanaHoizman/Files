
// IIFE = Immediately Invoked Function Expression / Self Invoked Function
var Person = (function () {

    //var x = 123;

    function sayHi() {
        alert("Hi");
    }


    //alert(window.);

    function Person(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }

    Person.prototype.display = function () {
        alert(this.fName + " " + this.lName);
    };

    return Person;


})();
