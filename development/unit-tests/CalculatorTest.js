/**
 * Wrap the test in a module and import it's dependencies
 */
(function(Calculator){
    
    module("Calculator ", {
      setup: function() {
        // prepare something for all following tests
      },
      
      teardown: function() {
        // clean up after each test here 
      }
    });
    
    /**
     * Test that our calculator module exists using and ok statement to prove that Calculator.add is available
     */
    test("Calculator created", function() {
        ok(Calculator, "Calculator was instanciated");
        ok(Calculator.add, "The add method is available");
    });
    
    test('add method : valid inputs', function(){
        
        //Check a variety of sums and edge cases.
        
        var sum = Calculator.calculate("add", 2, 2);
        equal(sum, 4, "(2 + 2) The expected sum '4' was returned");
        
        sum = Calculator.calculate("add", 2, -2);
        equal(sum, 0, "(2 + -2) The expected sum '0' was returned");
        
        sum = Calculator.calculate("add", 2, -4);
        equal(sum, -2, "(2 + -4) The expected sum '-2' was returned");
        
        sum = Calculator.calculate("add", -4, -4);
        equal(sum, -8, "(-4 + -4) The expected sum '-2' was returned");
    
        sum = Calculator.calculate("add", 0, 0);
        equal(sum, 0, "(0 + 0) The expected sum '0' was returned");
    });
    
    test('add method : invalid inputs', function() {
        throws(
            function() {
                Calculator.calculate("add", null, null);
            },
            "input: null is not a valid input",
            "Error thrown for bad input"
        );
        
        throws(
            function() {
                Calculator.calculate("add", NaN, 0);
            },
            "input: NaN is not a valid input",
            "Error thrown for bad input"
        );
        throws(
            function() {
                Calculator.calculate("add", Infinity, 0);
            },
            "input: Infinity is not a valid input",
            "Error thrown for bad input"
        );
    });
    
    test('subtract method :', function() {
        var difference = Calculator.calculate("subtract", 2, 2);
        ok(difference === 0, "The expected difference '0' was returned");
    });
    
    test('multiply method :', function() {
        var product = Calculator.calculate("multiply", 2, 2);
        ok(product === 4, "The expected product '4' was returned");
    });
    
    test('divide method :', function() {
        var quotient = Calculator.calculate("divide", 4, 2);
        ok(quotient === 2, "The expected quotient '2' was returned");
    });
    
    test('square method :', function() {
        var product = Calculator.calculate("square", 4);
        ok(product === 16, "The expected product '16' was returned");
    });
    

})(modules.utilities.calculator);