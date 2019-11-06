import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AspectRatio from './AspectRatio';
import { create } from 'react-test-renderer';

describe('AspectRatio component', () => {
  test('it shows the expected div when aspect ratio is 16/9 is rendered', () => {
    const imgUrl = 'https://storage.needpix.com/rsynced_images/fall-by-the-lake-14767797082J2.jpg';
    render(
      <AspectRatio ratio={ 16 / 9 }>
        <img src={ imgUrl }/>
      </AspectRatio>);
    const aspectRatio = document.querySelector('.a-aspect-ratio');
    expect(aspectRatio).toContainHTML(imgUrl);
    const aspectRatioOuter = document.querySelector('.a-aspect-ratio__outer-wrapper');
    expect(aspectRatioOuter).toHaveStyle('padding-top: 56.25%');
  });

  test('it shows the expected div when aspect ratio is 1/1 is rendered', () => {
    render(
      <AspectRatio ratio={ 1 / 1 }>
      </AspectRatio>);
    const aspectRatioOuter = document.querySelector('.a-aspect-ratio__outer-wrapper');
    expect(aspectRatioOuter).toHaveStyle('padding-top: 100%');
  });

  test('it calculates properly the percentage aspect ratio', () => {
    const aspectRatio = create( <AspectRatio ratio={ 1 / 1 } />);
    const instance = aspectRatio.getInstance();
    const paddingTop = instance.calculatePaddingTop();
    expect(paddingTop).toBe(100);
  });
});