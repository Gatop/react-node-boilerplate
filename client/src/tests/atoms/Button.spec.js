import React from "react";
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from '../../components/atoms/Button/Button';

describe('Button component', () => {
  test('it shows the expected text when button is rendered', () => {
    const buttonText = 'Test Message 1';
    const button = render(<Button buttonText={buttonText} />);
    expect(document.querySelector('button')).toHaveClass('a-button');
    expect(document.querySelector('button')).toContainHTML(buttonText);
  });

  test('it has correct class when is passed', () => {
    const buttonText = 'Test Message 2';
    const buttonClasses = 'Secondary';
    const button = render(<Button buttonText={buttonText} buttonClasses={buttonClasses} />);
    expect(document.querySelector('button')).toHaveClass('a-button');
    expect(document.querySelector('button')).toHaveClass(buttonClasses);
    expect(document.querySelector('button')).toContainHTML(buttonText);
  });
});