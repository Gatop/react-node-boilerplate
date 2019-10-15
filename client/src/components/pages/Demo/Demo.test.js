import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';

it('Demo renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Demo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
