import React from 'react'
import Slider from "react-slick";
import bag from '../images/woman-bag.jpg'
import shopping from '../images/woman-shopping.jpg'
import jeans from '../images/woman-jeans.jpg'
import { urlFor } from '../lib/client';

const HomeBanner = ({banner}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows:true,
    }

    console.log(banner[1].collection)


    return (
        <div className='home_banner'>
            <Slider {...settings} className='slider'>
                <div className='carousel'>
                    <img src={urlFor(banner[0].image[0])} alt="carousel-img" className="carousel-img" />
                    <div className='carousel-details'>
                        <h4>{banner[0].collection}</h4>
                        <h3>{banner[0].arrival}</h3>
                        <button>{banner[0].shopbutton}</button>
                    </div>
                </div>
                <div className='carousel'>
                    <img src={urlFor(banner[1].image[0])} alt="carousel-img" className="carousel-img" />
                    <div className='carousel-details'>
                        <h4>{banner[1].collection}</h4>
                        <h3>{banner[1].arrival}</h3>
                        <button>{banner[1].shopbutton}</button>
                    </div>
                </div>
                <div className='carousel'>
                    <img src={urlFor(banner[2].image[0])} alt="carousel-img" className="carousel-img" />
                    <div className='carousel-details'>
                        <h4>{banner[2].collection}</h4>
                        <h3>{banner[2].arrival}</h3>
                        <button>{banner[2].shopbutton}</button>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default HomeBanner
