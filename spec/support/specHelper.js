var jQuery = require('jquery');

Object.assign(global, {
    jQuery,
    $: jQuery
});

require('jasmine_dom_matchers');