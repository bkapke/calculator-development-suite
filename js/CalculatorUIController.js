/*
 * This is out main calculator UI controller class.  It handles creating the UI instance of the calculator, and listening for
 * calculator events.  UI events will be passed to the calculator for processing.
 *
 */
(function(Calculator, $, undefined) {
    
var CalculatorUIController = function() {
    //Create the calculator
};

/*
 * $parentElem is an optional parameter that lets us pass in an element to add the calculator to
 * and create the div on the fly
 */
CalculatorUIController.prototype.showCalculator = function($parentElem) {
    
    var mainCalcWrapper;
    
    if ($parentElem === undefined) {
        mainCalcWrapper = $(".calculator");
    } else {
        mainCalcWrapper = $("<div class='calculator'> ");
        $parentElem.append(mainCalcWrapper);
    }
    
    /*
     * consider loading the calculator template with ajax and adding it to the view.  The current setup makes
     * validation difficult
     */
    
    //Additon form elements
    var addSubmit = "<input type='button' id='submitAdd' value='add'>",
        add1Element = "<input id='add1' class='clearedOnFocus' placeholder='number 1'>",
        add2Element = "<input id='add2' class='clearedOnFocus' placeholder='number 2'>",
        sumOutput = "<input id='sum' class='clearedOnBlur' placeholder='sum' readonly><br>",
        
        //subtract form
        subtractSubmit = "<input type='button' id='submitSubtract' value='subtract'>",
        subtract1Element = "<input id='subtract1' class='clearedOnFocus' placeholder='number 1'>",
        subtract2Element = "<input id='subtract2' class='clearedOnFocus' placeholder='number 2'>",
        subtractOutput = "<input id='difference' class='clearedOnBlur' placeholder='difference' readonly><br>",
        
        //multiply form
        multiplySubmit = "<input type='button' id='submitMultiply' value='multiply'>",
        multiply1Element = "<input id='multiply1' class='clearedOnFocus' placeholder='number 1'>",
        multiply2Element = "<input id='multiply2' class='clearedOnFocus' placeholder='number 2'>",
        multiplyOutput = "<input id='product' class='clearedOnBlur' placeholder='product' readonly><br>",
        
        //divide form
        divideSubmit = "<input type='button' id='submitDivide' value='divide'>",
        divide1Element = "<input id='divide1' class='clearedOnFocus' placeholder='number 1'>",
        divide2Element = "<input id='divide2' class='clearedOnFocus' placeholder='number 2'>",
        divideOutput = "<input id='quotient' class='clearedOnBlur' placeholder='quotient' readonly><br>",
        
        //square form
        squareSubmit = "<input type='button' id='submitSquare' value='square'>",
        square1Element = "<input id='square1' class='clearedOnFocus' placeholder='number to square'>",
        squareOutput = "<input id='square' class='clearedOnBlur' placeholder='square' readonly><br>";
    
    mainCalcWrapper.append(addSubmit + add1Element + add2Element + sumOutput);
    
    mainCalcWrapper.append(subtractSubmit + subtract1Element + subtract2Element + subtractOutput);
    
    mainCalcWrapper.append(multiplySubmit + multiply1Element + multiply2Element + multiplyOutput);
    
    mainCalcWrapper.append(divideSubmit + divide1Element + divide2Element + divideOutput);
    
    mainCalcWrapper.append(squareSubmit + square1Element + squareOutput);

    //once the calculator is created, bind the UI events
    this.bindCalcUIEvents();
};

CalculatorUIController.prototype.clearInput = function(target) {
    $(target).val("");
};

CalculatorUIController.prototype.submitCalculation = function(operation, output, val1, val2) {
    var result = null;
    if (val2 !== undefined) {
        result = Calculator.calculate(operation, val1, val2);
    } else {
        result = Calculator.calculate(operation, val1);
    }
    
    output.focus();
    output.val(result);
};

CalculatorUIController.prototype.bindCalcUIEvents = function() {
    var that = this;
    $('#submitAdd').click(function(e) {
        var add1 = parseFloat($("#add1").val());
        var add2 = parseFloat($("#add2").val());
        var sumOutput = $("#sum");
        
        that.submitCalculation("add", sumOutput, add1, add2);
    });
    
    $('#submitSubtract').click(function(e) {
        var subtract1 = parseFloat($("#subtract1").val());
        var subtract2 = parseFloat($("#subtract2").val());
        var differenceOutput = $("#difference");
        
        that.submitCalculation("subtract", differenceOutput, subtract1, subtract2);
    });
    
    $('#submitMultiply').click(function(e) {
        var multiply1 = parseFloat($("#multiply1").val());
        var multiply2 = parseFloat($("#multiply2").val());
        var productOutput = $("#product");
        
        that.submitCalculation("multiply", productOutput, multiply1, multiply2);
    });
    
    $('#submitDivide').click(function(e) {
        var divide1 = parseFloat($("#divide1").val());
        var divide2 = parseFloat($("#divide2").val());
        var divideOutput = $("#quotient");
        
        that.submitCalculation("divide", divideOutput, divide1, divide2);
    });
    
    $('#submitSquare').click(function(e) {
        var square1 = parseFloat($("#square1").val());
        var squareOutput = $("#square");
        
        that.submitCalculation("square", squareOutput, square1, null);
    });
    
    $(".clearedOnFocus").focus(function(e) {
        //$(e.target).val("");
        that.clearInput(e.target);
    });
    
    $(".clearedOnBlur").blur(function(e) {
        //that.clearInput(e.target);
    });
};

modules.utilities.calculatorUIController = new CalculatorUIController();

})(modules.utilities.calculator,
   jQuery);