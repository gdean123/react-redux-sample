import ReactDOM from 'react-dom'
import TestUtils from 'react/lib/ReactTestUtils';

export function render(component) {
    var reactComponent = TestUtils.renderIntoDocument(component);
    return ReactDOM.findDOMNode(reactComponent);
}