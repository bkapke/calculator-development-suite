function highlightSyntax() {
    hljs.initHighlightingOnLoad();
}

$(document).ready(function () {
    var Tabs = modules.ui.Tabs;
    var CalculatorUIController = modules.utilities.calculatorUIController;
    CalculatorUIController.showCalculator($('#calculator'));
    var mainTabs = new Tabs();
    mainTabs.bindTabs($("#main-nav-tabs"), $("#main-tab-panes"));
    
    /**
     * load the tab panes dynamically
     */
    var appPatternLoading = $.Deferred();
        gruntAutomationLoading = $.Deferred();
    
    
    $("#overview-tab").load("pages/overview.html");
    $("#application-overview-tab").load("pages/application-overview.html");
    $("#application-pattern-tab").load("pages/application-pattern.html", function(){
        appPatternLoading.resolve();
    });
    
    $("#grunt-automation-tab").load("pages/grunt-automation.html", function(){
        gruntAutomationLoading.resolve();
    });
    
    var allPanesLoaded = $.when(appPatternLoading, gruntAutomationLoading);
    
    allPanesLoaded.done(function() {
        highlightSyntax();        
    });
});