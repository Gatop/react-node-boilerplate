import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button';

describe('Button component', () => {
  test('it shows the expected text when button is rendered', () => {
    const buttonText = 'Test Message 1';
    render(<Button buttonText={ buttonText } />);
    const button = document.querySelector('button');
    expect(button).toHaveClass('a-button');
    expect(button).toContainHTML(buttonText);
  });

  test('it has correct class when is passed', () => {
    const buttonText = 'Test Message 2';
    const buttonClasses = 'Secondary';
    render(<Button buttonText={ buttonText } buttonClasses={ buttonClasses } />);
    const button = document.querySelector('button');
    expect(button).toHaveClass('a-button');
    expect(button).toHaveClass(buttonClasses);
    expect(button).toContainHTML(buttonText);
  });
});