import React from 'react';
import { BsArrow90DegLeft } from 'react-icons/bs';

export class Sport extends React.Component{
    render(){
        return (
            <div>
                <BsArrow90DegLeft id="arrowBack" onClick={ this.props.goBack } />
                <img src="img/sport/Rugby.JPG" alt=""></img>
            </div>
        )
    }
}