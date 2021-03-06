import ReactDOM from 'react-dom'
import TestUtils from 'react/lib/ReactTestUtils';

export function render(component) {
  var reactComponent = TestUtils.renderIntoDocument(component);

  return {
    component: reactComponent,
    element: ReactDOM.findDOMNode(reactComponent)
  }
}

export function shallowRender(component) {
  var renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}
