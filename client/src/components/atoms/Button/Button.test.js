import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';
import { create } from 'react-test-renderer';

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
    const buttonClasses = [ 'secondary', 'dark' ];
    const classSecondary = 'a-button--secondary';
    const classDark = 'a-button--dark';
    render(<Button buttonText={ buttonText } buttonClasses={ buttonClasses } />);
    const button = document.querySelector('button');
    expect(button).toHaveClass('a-button');
    expect(button).toHaveClass(classSecondary);
    expect(button).toHaveClass(classDark);
    expect(button).toContainHTML(buttonText);
  });

  test('it returns modifiers with correct format', () => {
    const buttonText = 'Test Message 3';
    const buttonClasses = [ 'secondary', 'green' ];
    const formattedClasses  = 'a-button--secondary a-button--green';
    const button = create(<Button buttonText={ buttonText } />);
    const instance = button.getInstance();
    const result = instance.setCustomButtonClasses(buttonClasses);
    expect(result).toBe(formattedClasses);
  });

  test('it returns empty when classes are empty', () => {
    const buttonText = 'Test Message 4';
    const buttonClasses = [];
    const button = create(<Button buttonText={ buttonText } />);
    const instance = button.getInstance();
    const result = instance.setCustomButtonClasses(buttonClasses);
    expect(result).toBe('');
  });
});