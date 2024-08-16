import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../images/about2.jpg'
import Image2 from '../images/about3.jpg'
import Image3 from '../images/about4.jpg'
import Image4 from '../images/about4.jpg'
import Image5 from '../images/about5.jpg'
import Image6 from '../images/about6.jpg'
import Image7 from '../images/about7.jpg'
import './slider.css'



const Slider = () => {
    return (
        <div className='carousel'>
            Ghana
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{
                            maxHeight: '100vh',
                            objectFit: 'cover'
                        }}
                        className='d-block w-100'
                        src={Image1}
                        alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>

                    <img
                        style={{
                            maxHeight: '100vh',
                            objectFit: 'cover'

                        }}
                        className='d-block w-100'
                        src={Image2}
                        alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            maxHeight: '100vh',
                            objectFit: 'cover'

                        }}
                        className='d-block w-100'
                        src={Image3}
                        alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            maxHeight: '100vh',
                            objectFit: 'cover',

                        }}
                        className='d-block w-100'
                        src={Image4}
                        alt="Fourth slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            maxHeight: '100vh',
                            objectFit: 'cover',

                        }}
                        className='d-block w-100'
                        src={Image5}
                        alt="Fifth slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            maxHeight: '100vh',
                            objectFit: 'cover',

                        }}
                        className='d-block w-100'
                        src={Image6}
                        alt="sixth slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            maxHeight: '100vh',
                            objectFit: 'cover',

                        }}
                        className='d-block w-100'
                        src={Image7}
                        alt="seventh slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;