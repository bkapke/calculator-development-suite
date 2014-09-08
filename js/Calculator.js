/**
 * Create the calculator and add it to the modules object
 */
(function(undefined){
    /**
     * set up a function to test in the test suite
     */
    var Calculator = function() {

    };
    
    Calculator.prototype.validateNumbers = function() {
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] !== 0 && !arguments[i] || arguments[i] === null || isNaN(arguments[i]) || !isFinite(arguments[i])) {
                throw "input: " + arguments[i] + " is not a valid input";
            }
        }
        return true;
    };
    
    Calculator.prototype.isSingleInputType = function(args) {
        if (args.length > 1) {
            throw "Expected one argument";
        }
        return true;
    };
    
    Calculator.prototype.calculate = function(operation, firstNum, secondNum) {
        var args = arguments;
        if (operation === "add") {
            this.validateNumbers(firstNum, secondNum);
            return this.add(firstNum, secondNum);
        }
        if (operation === "subtract") {
            this.validateNumbers(firstNum, secondNum);
            return this.subtract(firstNum, secondNum);
        }
        if (operation === "multiply") {
            this.validateNumbers(firstNum, secondNum);
            return this.multiply(firstNum, secondNum);
        }
        if (operation === "divide") {
            this.validateNumbers(firstNum, secondNum);
            return this.divide(firstNum, secondNum);
        }
        if (operation === "square") {
            var numbersEntered = Array.prototype.slice.call(args, 2);
            this.isSingleInputType(numbersEntered);
            this.validateNumbers(firstNum);
            return this.square(firstNum);
        }
        return null;
    };
    
    Calculator.prototype.add = function(firstNum, secondNum) {
        return firstNum + secondNum;
    };
    
    Calculator.prototype.subtract = function(firstNum, secondNum) {
        return firstNum - secondNum;
    };
    
    Calculator.prototype.multiply = function(firstNum, secondNum) {
        return firstNum * secondNum;
    };
    
    Calculator.prototype.divide = function(firstNum, secondNum) {
        return firstNum / secondNum;
    };
    
    Calculator.prototype.square = function(firstNum) {
        return firstNum * firstNum;
    };
    
    //add the calculator intance to the modules.
    modules.utilities.calculator = new Calculator();

})();
