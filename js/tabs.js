/*
 * Custom Tab Module.
 * This is a simple jquery tab module. created by Brian Kapke.
 * use this module to tab content
 */

//var Tabs = {};

(function() {
    function Tabs() {
        //this.animate = false;
    }
    
    Tabs.prototype.bindTabs = function($tabNav, $tabPanes) {
        var that = this;
        $.each($tabNav.children(), function(id, tabLink) {
            var $tempLink = $($(tabLink).children()[0]);
            that.addListener($tempLink, $tabNav, $tabPanes);
        });
    };
    
    Tabs.prototype.addListener = function($tempLink, $tabNav, $tabPanes) {
        var tabToShow = $tempLink.attr("href");
        var activeTabClass = "activeTab";
        var activeTabLinkClass = "activeTabLink";
        
        $tempLink.click(function(e) {
            e.preventDefault();
            $tabPanes.find("." + activeTabClass).removeClass(activeTabClass);
            $(tabToShow).addClass(activeTabClass);
            
            $tabNav.find("." + activeTabLinkClass).removeClass(activeTabLinkClass);
            $tempLink.addClass(activeTabLinkClass);
        });
    };
    
    modules.ui.Tabs = Tabs;
    
})();