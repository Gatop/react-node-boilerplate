import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonHook from './ButtonHook';

describe('ButtonHook component', () => {
  test('it shows the expected text when button is rendered', () => {
    const buttonText = 'Test Message 1';
    render(<ButtonHook buttonText={ buttonText } />);
    const button = document.querySelector('button');
    expect(button).toHaveClass('a-button');
    expect(button).toContainHTML(buttonText);
  });

  test('it has correct class when is passed', () => {
    const buttonText = 'Test Message 2';
    const buttonClasses = [ 'secondary', 'dark', 'hook' ];
    const classSecondary = 'a-button--secondary';
    const classDark = 'a-button--dark';
    const classHook = 'a-button--hook';
    render(<ButtonHook buttonText={ buttonText } buttonClasses={ buttonClasses } />);
    const button = document.querySelector('button');
    expect(button).toHaveClass('a-button');
    expect(button).toHaveClass(classSecondary);
    expect(button).toHaveClass(classDark);
    expect(button).toHaveClass(classHook);
    expect(button).toContainHTML(buttonText);
  });
});