//Module generator function adapted from : http://addyosmani.com/blog/essential-js-namespacing/

// top-level namespace being assigned an object literal
var modules = modules || {};

// a convenience function for parsing string namespaces and

// automatically generating nested namespaces
function extend( ns, ns_string ) {
    var parts = ns_string.split('.'),
        parent = ns,
        pl, i;
    if (parts[0] == "myApp") {
        parts = parts.slice(1);
    }
    pl = parts.length;
    for (i = 0; i < pl; i++) {
        //create a property if it doesnt exist
        if (typeof parent[parts[i]] == 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
}

//extend the required objects for the calculators
extend(modules, 'utilities.calculator');
extend(modules, 'utilities.calculatorUIController');
extend(modules, 'ui.Tabs');
