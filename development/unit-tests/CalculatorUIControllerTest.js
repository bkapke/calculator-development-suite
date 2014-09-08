/**
 * Wrap the test in a module and import it's dependencies
 */
(function(CalculatorUIController,
          $){
    
    var firstRun = true;
    module("Calculator ", {
        setup: function() {
            // prepare something for all following tests
            CalculatorUIController.showCalculator();
        },
      
        teardown: function() {
            // clean up after each test here 
        }
    });
    
    /**
     * Test that our calculatorUIController module exists using and ok statement to prove that Calculator.add is available
     */
    test("CalculatorUIController created", function() {
        ok(CalculatorUIController, "CalculatorUIController was instanciated");
        ok(CalculatorUIController.showCalculator, "CalculatorUIController has the method showCalculator");
    });
    
    test("Show Calculator", function() {
        //call show on the calculator
        var elemPlaceholder = $("#add1").attr("placeholder");
        equal(elemPlaceholder, "number 1", "The calculator UI has been added");
    });

})(modules.utilities.calculatorUIController,
   jQuery);
 