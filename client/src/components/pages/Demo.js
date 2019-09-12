import React from 'react';

import Button from '../atoms/Button/Button';
import AspectRatio from '../atoms/AspectRatio/AspectRatio';

import './Demo.scss';

class Demo extends React.Component {
  render() {
    return (
      <div className='p-demo'>
        <div className='container'>

          <div className='grid-1'>
            <div className='col'><h1>H1: Lorem ipsum dolor sit amet consectetur adipiscing elit donec</h1></div>
            <div className='col'><h2>H2: Lorem ipsum dolor sit amet consectetur adipiscing elit donec</h2></div>
            <div className='col'><h3>H3: Lorem ipsum dolor sit amet consectetur adipiscing elit donec</h3></div>
            <div className='col'><h4>H4: Lorem ipsum dolor sit amet consectetur adipiscing elit donec</h4></div>
            <div className='col'><h5>H5: Lorem ipsum dolor sit amet consectetur adipiscing elit donec</h5></div>
            <div className='col'><h6>H6: Lorem ipsum dolor sit amet consectetur adipiscing elit donec</h6></div>
            <div className='col'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
            <div className='col'><p className='caption-light'>Lorem ipsum dolor sit amet consectetur adipiscing elit donec</p></div>
            <div className='col'><p className='caption-regular'>Lorem ipsum dolor sit amet consectetur adipiscing elit donec</p></div>
            <div className='col'><p className='caption-italic'>Lorem ipsum dolor sit amet consectetur adipiscing elit donec</p></div>
          </div>

          <h4>Botones</h4>
          <div className='grid-2-center-middle'>
            <div className='col'>
              <Button
                buttonText='This is a normal button'>
              </Button>
            </div>
            <div className='col'>
              <Button
                buttonText='This is a button primary'
                buttonClasses={ [ 'primary', 'dark' ] }>
              </Button>
            </div>
          </div>

          <h4>Aspect ratio</h4>
          <div className='grid-2_sm-1-middle'>
            <div className='col'>
              <AspectRatio ratio={ 1 / 1 }>
              </AspectRatio>
            </div>
            <div className='col'>
              <AspectRatio ratio={ 1 / 2 }>
              </AspectRatio>
            </div>
            <div className='col'>
              <AspectRatio ratio={ 4 / 3 }>
              </AspectRatio>
            </div>
            <div className='col'>
              <AspectRatio ratio={ 16 / 9 }>
                <img src='https://storage.needpix.com/rsynced_images/fall-by-the-lake-14767797082J2.jpg'/>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
