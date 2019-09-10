import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AspectRatio from './AspectRatio';

describe('AspectRatio component', () => {
  test('it shows the expected div when aspect ratio is rendered', () => {
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
});