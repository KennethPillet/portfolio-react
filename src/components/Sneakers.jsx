import React from 'react';
import ImageSlider from './ImageSlider.js';
import { SliderData } from './SliderData';
import { BsArrow90DegLeft } from 'react-icons/bs';

export class Sneakers extends React.Component{
    render(){
        return (
            <div>
            <BsArrow90DegLeft id="arrowBack" onClick={ this.props.goBack } />
                <ImageSlider slides={SliderData} />
                <a href="https://histoire-airmax.netlify.app" target="_blank"rel="noopener noreferrer">Site fais avec Bootstrap lors d'une formation d'initiation au codage</a>
                {/* <div id="slider">
                    <a href="img/snkrs/2458093.jpg"><img className="snkrs" src="img/snkrs/2458093.jpg" alt="Sean Wotherspoon"></img></a>
                    <a href="img/snkrs/nike-sb-dunk-low-pro-purple-lobster-release-date.jpg"><img className="snkrs" src="img/snkrs/nike-sb-dunk-low-pro-purple-lobster-release-date.jpg" alt="Concepts dunk Purple"></img></a>
                    <a href="img/snkrs/kaws-air-jordan-4-online-release-01-960x640.jpg"><img className="snkrs" src="img/snkrs/kaws-air-jordan-4-online-release-01-960x640.jpg" alt="AJ4 Kaws grey"></img></a>
                    <a href="img/snkrs/Size-Nike-Air-Max-1-Dawn-01.jpg"><img className="snkrs" src="img/snkrs/Size-Nike-Air-Max-1-Dawn-01.jpg" alt="am1 size?"></img></a>
                    <a href="img/snkrs/travis-scott-x-nike-sb-dunk-low-CT5053-001.jpg"><img className="snkrs" src="img/snkrs/travis-scott-x-nike-sb-dunk-low-CT5053-001.jpg" alt="aj1 high travis scott"></img></a>
                    <a href="img/snkrs/warren-jones-LFlVuWLjYEo-unsplash.jpg"><img className="snkrs" src="img/snkrs/warren-jones-LFlVuWLjYEo-unsplash.jpg" alt="air max spiral"></img></a>
                </div> */}
            </div>
        )
    }
}