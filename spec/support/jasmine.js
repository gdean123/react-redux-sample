const requireAll = (requireContext) => {
  requireContext.keys().map(requireContext);
};

global.$ = global.jQuery = require('jquery');
require('jasmine_dom_matchers');
requireAll(require.context('../unit/', true, /[sS]pec\.js$/));
requireAll(require.context('../feature/', true, /[sS]pec\.js$/));
